import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import type { Lab, MediaManifest, Partner, ResearchItem } from "../../content/types";
import { PartnerGrid } from "./CooperationCards";
import { PersonCard } from "./PersonCard";
import { ResearchDirectionCard } from "./ResearchCards";
import { LabCard } from "./StudentCards";

const partners = (count: number): Partner[] =>
  Array.from({ length: count }, (_, index) => ({
    id: `partner-${index}`,
    name: `Partner ${index}`,
    logo: { src: `/partner-${index}.svg`, alt: `Partner ${index}` },
  }));

const mixedPartners = (realSourceCount: number): Partner[] =>
  Array.from({ length: 8 }, (_, index) => ({
    id: `mixed-${index}`,
    name: `Mixed ${index}`,
    ...(index < realSourceCount
      ? { logo: { src: `/mixed-${index}.svg`, alt: `Mixed ${index}` } }
      : { mediaRef: `source-less-${index}` }),
  }));

describe("card data-shape behavior", () => {
  it("keeps long research descriptions readable instead of clamping them", () => {
    const item: ResearchItem = {
      id: "long",
      title: "Nội dung dài",
      description: "Nội dung đã xác minh ".repeat(20),
    };
    render(<ResearchDirectionCard item={item} />);

    expect(
      screen.getByRole("heading", { name: "Nội dung dài" }).nextElementSibling,
    ).not.toHaveClass("line-clamp-4");
  });

  it("renders a lab with only its verified name and no empty copy blocks", () => {
    const lab = { id: "foundry", name: "AIC Foundry Lab" } as Lab;
    const { container } = render(<LabCard lab={lab} />);

    expect(screen.getByRole("heading", { name: "AIC Foundry Lab" })).toBeInTheDocument();
    expect(container.querySelector("p")).not.toBeInTheDocument();
  });

  it("does not reserve portrait media when a person has no approved image", () => {
    const { container } = render(
      <PersonCard
        person={{ id: "one", name: "Tên đã duyệt", role: "Vai trò", group: "director" }}
      />,
    );

    expect(container.querySelector(".bg-neutral-visual")).not.toBeInTheDocument();
  });

  it("uses the neutral legacy card by default instead of inferring a variant from the group", () => {
    const { container } = render(
      <PersonCard
        person={{
          id: "advisor",
          name: "Cố vấn",
          role: "Ủy viên",
          group: "advisor",
          bio: "Tiểu sử đã duyệt",
        }}
      />,
    );

    expect(container.firstElementChild).toHaveAttribute("data-person-variant", "legacy");
    expect(container.querySelector('[data-person-variant="director"]')).not.toBeInTheDocument();
    expect(screen.getByText("Tiểu sử")).toBeInTheDocument();
  });

  it("uses a static grid for up to four partners and a marquee for five or more", () => {
    const grid = render(<PartnerGrid partners={partners(4)} />);
    expect(grid.getByTestId("partner-grid")).toHaveAttribute("data-layout", "grid");
    expect(grid.getByRole("img", { name: "Partner 0" }).parentElement).toHaveClass("w-full");
    expect(grid.getByRole("img", { name: "Partner 0" }).parentElement).not.toHaveClass("w-44");
    grid.unmount();
    expect(
      render(<PartnerGrid partners={partners(5)} />).getByTestId("partner-grid"),
    ).toHaveAttribute("data-layout", "marquee");
  });

  it("keeps source-less partner records in a labelled static grid regardless of count", () => {
    const sourceLessPartners: Partner[] = Array.from({ length: 8 }, (_, index) => ({
      id: `slot-${index + 1}`,
      name: `Logo ${index + 1}`,
      mediaRef: `partner.logo-${index + 1}`,
    }));

    const { getByTestId } = render(<PartnerGrid partners={sourceLessPartners} />);

    expect(getByTestId("partner-grid")).toHaveAttribute("data-layout", "grid");
    expect(getByTestId("partner-grid")).toHaveClass("grid-cols-2", "md:grid-cols-4");
    expect(screen.getByText("Logo 1")).toBeInTheDocument();
    expect(screen.getByText("Logo 8")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("counts resolved manifest sources when selecting the partner layout", () => {
    const manifest = Object.fromEntries(
      Array.from({ length: 5 }, (_, index) => {
        const id = `resolved-${index}`;
        return [
          id,
          {
            id,
            kind: "image" as const,
            aspectRatio: "aspect-[3/2]",
            alt: `Resolved ${index}`,
            src: `/resolved-${index}.svg`,
          },
        ];
      }),
    ) satisfies MediaManifest;
    const resolvedPartners: Partner[] = Object.keys(manifest).map((mediaRef, index) => ({
      id: `resolved-partner-${index}`,
      name: `Resolved ${index}`,
      mediaRef,
    }));

    expect(
      render(<PartnerGrid partners={resolvedPartners} manifest={manifest} />).getByTestId(
        "partner-grid",
      ),
    ).toHaveAttribute("data-layout", "marquee");
  });

  it("uses the real-source threshold for mixed eight-record partner sets", () => {
    const fourReal = render(<PartnerGrid partners={mixedPartners(4)} />);
    expect(fourReal.getByTestId("partner-grid")).toHaveAttribute("data-layout", "grid");
    fourReal.unmount();

    expect(
      render(<PartnerGrid partners={mixedPartners(5)} />).getByTestId("partner-grid"),
    ).toHaveAttribute("data-layout", "marquee");
  });

  it("uses equal loop groups and removes duplicate links from the keyboard order", () => {
    const linkedPartners = partners(5).map((partner) => ({
      ...partner,
      url: `https://example.com/${partner.id}`,
    }));
    const { container, getByTestId } = render(<PartnerGrid partners={linkedPartners} />);

    expect(getByTestId("partner-grid")).toHaveAttribute("data-layout", "marquee");
    const groups = container.querySelectorAll("[data-marquee-group]");
    expect(groups).toHaveLength(2);
    expect(groups[0]).toHaveAttribute("data-marquee-group", "primary");
    expect(groups[1]).toHaveAttribute("data-marquee-group", "duplicate");
    expect(groups[0]).toHaveClass("shrink-0", "gap-4", "pr-4");
    expect(groups[1]).toHaveClass("shrink-0", "gap-4", "pr-4");
    expect(groups[0].children).toHaveLength(5);
    expect(groups[1].children).toHaveLength(5);
    expect(groups[1]).toHaveAttribute("aria-hidden", "true");
    for (const link of groups[1].querySelectorAll("a")) {
      expect(link).toHaveAttribute("tabindex", "-1");
    }
  });

  it("pauses the marquee contract for hover and keyboard focus", async () => {
    const user = userEvent.setup();
    const linkedPartners = partners(5).map((partner) => ({
      ...partner,
      url: `https://example.com/${partner.id}`,
    }));
    const { getAllByRole, getByTestId } = render(<PartnerGrid partners={linkedPartners} />);
    const marquee = getByTestId("partner-grid");
    const track = marquee.firstElementChild;

    expect(marquee).toHaveAttribute("data-reduced-motion-layout", "static");
    expect(marquee).toHaveClass("partner-marquee");
    expect(track).toHaveClass(
      "partner-track",
      "group-hover:[animation-play-state:paused]",
      "group-focus-within:[animation-play-state:paused]",
    );

    await user.tab();
    expect(getAllByRole("link")[0]).toHaveFocus();
  });
});
