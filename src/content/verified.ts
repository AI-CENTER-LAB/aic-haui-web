import type { SiteContent } from "./types";

const email = "aic-sict@haui.edu.vn";
const campusAddress =
  "Đại học Công nghiệp Hà Nội, số 298, Đường Cầu Diễn, Phường Tây Tựu, Thành phố Hà Nội.";

export const verifiedSiteContent: SiteContent = {
  identity: {
    shortName: "AIC",
    fullName: "Trung tâm Nghiên cứu và Ứng dụng Trí tuệ Nhân tạo",
  },
  hero: {
    eyebrow: "AIC · HaUI · SICT",
    title: "Trung tâm Nghiên cứu và Ứng dụng Trí tuệ Nhân tạo",
    description:
      "Đơn vị trực thuộc Trường Công nghệ Thông tin và Truyền thông, Đại học Công nghiệp Hà Nội.",
    primaryCta: "Khám phá trung tâm",
    secondaryCta: "Dành cho sinh viên",
  },
  pages: {
    about: { title: "Về chúng tôi" },
    organization: { title: "Tổ chức" },
    research: { title: "Nghiên cứu" },
    cooperation: { title: "Hợp tác" },
    students: { title: "Dành cho sinh viên" },
    contact: { title: "Liên hệ" },
  },
  about: {
    intro:
      "Trung tâm Nghiên cứu và Ứng dụng Trí tuệ Nhân tạo là đơn vị trực thuộc Trường Công nghệ Thông tin và Truyền thông - Đại học Công nghiệp Hà Nội.",
    vision:
      "Trở thành đơn vị nghiên cứu mở, kết nối các nhà khoa học trong nước và quốc tế nhằm thúc đẩy nghiên cứu, đổi mới sáng tạo và ứng dụng Trí tuệ nhân tạo, Công nghệ thông tin.",
    mission:
      "Thúc đẩy nghiên cứu, đổi mới sáng tạo và ứng dụng Trí tuệ nhân tạo - Công nghệ thông tin; kết nối nhà trường, doanh nghiệp và cộng đồng để tạo ra các giải pháp có giá trị cho xã hội.",
    parentUnit: "Trường Công nghệ Thông tin và Truyền thông - Đại học Công nghiệp Hà Nội.",
  },
  people: [],
  research: { directions: [], results: [], groups: [], activities: [] },
  cooperation: {
    enterprise: [],
    research: [],
    international: [],
    technologyTransfer: [],
    partners: [],
    contactHref: `mailto:${email}`,
  },
  students: {
    labs: [
      { id: "foundry", name: "AIC Foundry Lab" },
      { id: "innovation", name: "AIC Innovation Lab" },
    ],
    joinSteps: [],
    contactHref: `mailto:${email}`,
  },
  contact: {
    email,
    items: [
      {
        id: "office",
        label: "Văn phòng",
        primary: "Phòng 1201, Tòa nhà A1",
        secondary: campusAddress,
      },
      {
        id: "laboratory",
        label: "Phòng thí nghiệm",
        primary: "Phòng 1504, Tòa nhà A1",
        secondary: campusAddress,
      },
      { id: "email", label: "Email", primary: email, href: `mailto:${email}` },
    ],
  },
  footer: {},
};
