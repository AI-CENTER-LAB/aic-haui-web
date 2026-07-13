import { describe, expect, expectTypeOf, it, vi } from "vitest";

import { siteContent } from "./site";
import { stitchContent } from "./stitch";
import type { StitchContent } from "./stitch";
import { verifiedSiteContentVi } from "./verified";

function deepFreeze(value: unknown): void {
  if (!value || typeof value !== "object" || Object.isFrozen(value)) return;

  Object.freeze(value);
  Object.values(value).forEach(deepFreeze);
}

describe("Stitch prototype content", () => {
  it("keeps the approved demo record counts", () => {
    expect(stitchContent.people.filter((person) => person.group === "director")).toHaveLength(3);
    expect(stitchContent.research.council).toHaveLength(3);
    expect(stitchContent.people.filter((person) => person.group === "teacher-lab")).toHaveLength(3);
    expect(stitchContent.people.filter((person) => person.group === "student-leader")).toHaveLength(
      6,
    );
    expect(stitchContent.research.directions).toHaveLength(3);
    expect(stitchContent.research.metrics).toHaveLength(4);
    expect(stitchContent.research.groups).toHaveLength(7);
    expect(stitchContent.research.results).toEqual([]);
    expect(stitchContent.research.activities).toEqual([]);
    expect(stitchContent.cooperation.enterprise).toHaveLength(1);
    expect(stitchContent.cooperation.research).toHaveLength(1);
    expect(stitchContent.cooperation.international).toHaveLength(1);
    expect(stitchContent.cooperation.technologyTransfer).toHaveLength(1);
    expect(stitchContent.cooperation.partners).toHaveLength(8);
    expect(stitchContent.students.labs).toHaveLength(2);
    expect(stitchContent.students.joinSteps).toHaveLength(5);
  });

  it("transcribes the director names, roles, biographies, and emails", () => {
    expect(stitchContent.people.filter((person) => person.group === "director")).toEqual([
      expect.objectContaining({
        name: "TS. Trần Thị An",
        role: "Giám Đốc Trung Tâm",
        bio: "Chuyên gia về Trí tuệ nhân tạo và Xử lý ngôn ngữ tự nhiên. Có hơn 15 năm kinh nghiệm nghiên cứu và giảng dạy.",
        email: "tran.an@haui.edu.vn",
      }),
      expect.objectContaining({
        name: "PGS.TS. Nguyễn Hợp",
        role: "Phó Giám Đốc",
        bio: "Dẫn dắt các nhóm nghiên cứu về Thị giác máy tính và Robot học. Từng tu nghiệp tại Nhật Bản.",
        email: "nguyen.hop@haui.edu.vn",
      }),
      expect.objectContaining({
        name: "TS. Lê Cường",
        role: "Phó Giám Đốc",
        bio: "Phụ trách hợp tác doanh nghiệp và chuyển giao công nghệ. Chuyên sâu về Machine Learning ứng dụng.",
        email: "le.cuong@haui.edu.vn",
      }),
    ]);
  });

  it("uses the official AIC label in page copy", () => {
    expect(stitchContent.pages.organization.description).toContain("tại AIC.");
    expect(stitchContent.pages.organization.description).not.toContain("AIC Center");
  });

  it("keeps the Stitch ordering and labels for research and student content", () => {
    expect(stitchContent.research.metrics.map(({ value, label }) => [value, label])).toEqual([
      ["50+", "BÀI BÁO QUỐC TẾ"],
      ["15", "DỰ ÁN CẤP NHÀ NƯỚC"],
      ["12", "SẢN PHẨM CHUYỂN GIAO"],
      ["07", "NHÓM NGHIÊN CỨU"],
    ]);
    expect(stitchContent.research.groups.map((group) => group.title)).toEqual([
      "Computer Vision Lab",
      "NLP Lab",
      "Robotics Lab",
      "Data Science Lab",
      "Applied AI Lab",
      "IoT & AI Lab",
      "AI Ethics Lab",
    ]);
    expect(stitchContent.students.joinSteps.map((step) => step.title)).toEqual([
      "Khám Phá",
      "Ứng Tuyển",
      "Phỏng Vấn",
      "Gia Nhập",
      "Dự Án",
    ]);
  });

  it("marks every demo record as Stitch content", () => {
    const collections: Array<[string, readonly { source: "stitch" }[]]> = [
      ["people", stitchContent.people],
      ["council", stitchContent.research.council],
      ["directions", stitchContent.research.directions],
      ["metrics", stitchContent.research.metrics],
      ["results", stitchContent.research.results],
      ["groups", stitchContent.research.groups],
      ["activities", stitchContent.research.activities],
      ["enterprise cooperation", stitchContent.cooperation.enterprise],
      ["research cooperation", stitchContent.cooperation.research],
      ["international cooperation", stitchContent.cooperation.international],
      ["technology transfer", stitchContent.cooperation.technologyTransfer],
      ["partners", stitchContent.cooperation.partners],
      ["labs", stitchContent.students.labs],
      ["join steps", stitchContent.students.joinSteps],
    ];

    for (const [name, records] of collections) {
      expect(
        records.every((record) => record.source === "stitch"),
        name,
      ).toBe(true);
    }
  });

  it("requires the Stitch source literal in every Stitch-specific record type", () => {
    expectTypeOf<StitchContent["people"][number]["source"]>().toEqualTypeOf<"stitch">();
    expectTypeOf<
      StitchContent["research"]["directions"][number]["source"]
    >().toEqualTypeOf<"stitch">();
    expectTypeOf<
      StitchContent["cooperation"]["partners"][number]["source"]
    >().toEqualTypeOf<"stitch">();
    expectTypeOf<StitchContent["students"]["labs"][number]["source"]>().toEqualTypeOf<"stitch">();
  });

  it("composes verified core content with demo collections without mutating either source", () => {
    expect(siteContent.identity).toEqual(verifiedSiteContentVi.identity);
    expect(siteContent.about).toEqual(verifiedSiteContentVi.about);
    expect(siteContent.contact).toEqual(verifiedSiteContentVi.contact);
    expect(siteContent.people).toEqual(stitchContent.people);
    expect(siteContent.research.groups).toEqual(stitchContent.research.groups);
    expect(siteContent.students.labs.map((lab) => lab.name)).toEqual([
      "AIC Foundry Lab",
      "AIC Innovation Lab",
    ]);

    expect(siteContent).not.toBe(verifiedSiteContentVi);
    expect(siteContent.people).not.toBe(stitchContent.people);
    expect(siteContent.research).not.toBe(stitchContent.research);
    expect(siteContent.students).not.toBe(stitchContent.students);
  });

  it("does not mutate frozen source objects while composing runtime content", async () => {
    vi.resetModules();
    const [{ stitchContent: stitchSource }, { verifiedSiteContentVi: verifiedSource }] =
      await Promise.all([import("./stitch"), import("./verified")]);
    const stitchSnapshot = structuredClone(stitchSource);
    const verifiedSnapshot = structuredClone(verifiedSource);

    deepFreeze(stitchSource);
    deepFreeze(verifiedSource);
    await import("./site");

    expect(stitchSource).toEqual(stitchSnapshot);
    expect(verifiedSource).toEqual(verifiedSnapshot);
  });
});
