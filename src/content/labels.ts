export type AboutSectionLabels = {
  homeHeading: string;
  introHeading: string;
  visionHeading: string;
  missionHeading: string;
  videoHeading: string;
  parentUnitHeading: string;
};

export const aboutSectionLabels = {
  homeHeading: "Về chúng tôi",
  introHeading: "Giới thiệu",
  visionHeading: "Tầm nhìn",
  missionHeading: "Sứ mệnh",
  videoHeading: "Video giới thiệu",
  parentUnitHeading: "Đơn vị trực thuộc",
} satisfies AboutSectionLabels;

export const organizationSectionLabels = {
  directors: "Ban Giám Đốc",
  council: "Hội Đồng Khoa Học",
  teacherLeaders: "Trưởng Nhóm Nghiên Cứu (Giảng Viên)",
  studentLeaders: "Trưởng Nhóm Nghiên Cứu (Sinh Viên)",
} as const;

export type ResearchSectionLabels = {
  directions: string;
  groups: string;
  cooperationCta: string;
  membersSuffix: string;
};

export const researchSectionLabels = {
  directions: "Định hướng Nghiên cứu",
  groups: "Các Nhóm Nghiên cứu (Labs)",
  cooperationCta: "Đề xuất hợp tác nghiên cứu",
  membersSuffix: "thành viên",
} satisfies ResearchSectionLabels;

export const cooperationSectionLabels = {
  fields: "Lĩnh Vực Hợp Tác",
  partners: "Đối Tác Chiến Lược",
  heroCta: "Khám phá cơ hội",
  learnMore: "Tìm hiểu",
  closingTitle: "Cùng Kiến Tạo Tương Lai",
  closingDescription:
    "Trở thành đối tác của AIC để cùng nhau giải quyết những thách thức công nghệ phức tạp nhất và dẫn đầu xu hướng AI.",
  closingButton: "Hợp tác với AIC",
} as const;

export const sharedCtaLabels = {
  cooperationContact: "Liên hệ hợp tác",
} as const;

export const studentSectionLabels = {
  researchSpace: "Không Gian Nghiên Cứu",
  researchSpaceDescription:
    "Khám phá các phòng thí nghiệm chuyên sâu được thiết kế để tối ưu hóa sự sáng tạo và năng suất nghiên cứu của sinh viên.",
  timeline: "Lộ Trình Tham Gia",
  timelineDescription:
    "Quy trình tuyển chọn minh bạch và lộ trình phát triển rõ ràng dành cho nghiên cứu sinh thực tập.",
  heroCta: "Tham gia với chúng tôi",
  closingTitle: "Sẵn sàng kiến tạo tương lai AI?",
  closingButton: "Tham gia với chúng tôi",
} as const;

export const contactSectionLabels = {
  heroTitle: "Liên hệ với chúng tôi",
  heroDescription:
    "Trung tâm Nghiên cứu và Ứng dụng Trí tuệ Nhân tạo (AIC) luôn sẵn sàng kết nối, hợp tác và chia sẻ không gian nghiên cứu chuyên sâu.",
  mapTitle: "Bản đồ vị trí AIC",
} as const;
