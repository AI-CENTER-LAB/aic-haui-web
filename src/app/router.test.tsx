import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { createAppRouter } from "./router";

const cases = [
  ["/", "Trung tâm Nghiên cứu và Ứng dụng Trí tuệ Nhân tạo"],
  ["/ve-chung-toi", "Về chúng tôi"],
  ["/to-chuc", "Tổ chức"],
  ["/nghien-cuu", "Nghiên cứu"],
  ["/hop-tac", "Hợp tác"],
  ["/sinh-vien", "Dành cho sinh viên"],
  ["/lien-he", "Liên hệ"],
] as const;

describe("application routes", () => {
  it.each(cases)("renders one page heading at %s", (path, heading) => {
    render(<RouterProvider router={createAppRouter([path])} />);
    expect(screen.getByRole("heading", { level: 1, name: heading })).toBeInTheDocument();
  });

  it("renders a not-found page", () => {
    render(<RouterProvider router={createAppRouter(["/khong-ton-tai"])} />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Không tìm thấy trang" }),
    ).toBeInTheDocument();
  });

  it("keeps the required home section order", () => {
    render(<RouterProvider router={createAppRouter(["/"])} />);
    expect(screen.getAllByRole("heading").map((heading) => heading.textContent)).toEqual([
      "Trung tâm Nghiên cứu và Ứng dụng Trí tuệ Nhân tạo",
      "Về chúng tôi",
      "Tầm nhìn và sứ mệnh",
      "Video giới thiệu",
      "Tổ chức",
      "Nghiên cứu",
      "Không gian dành cho sinh viên",
      "Hợp tác",
      "Liên hệ",
    ]);
  });
});
