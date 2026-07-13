import { useLanguage } from "../contexts/LanguageContext";

export type AboutSectionLabels = {
  homeHeading: string;
  introHeading: string;
  visionHeading: string;
  missionHeading: string;
  videoHeading: string;
  parentUnitHeading: string;
};

export type ResearchSectionLabels = {
  directions: string;
  groups: string;
  cooperationCta: string;
  membersSuffix: string;
};

const vi = {
  aboutSectionLabels: {
    homeHeading: "Về chúng tôi",
    introHeading: "Giới thiệu",
    visionHeading: "Tầm nhìn",
    missionHeading: "Sứ mệnh",
    videoHeading: "Video giới thiệu",
    parentUnitHeading: "Đơn vị trực thuộc",
  } satisfies AboutSectionLabels,
  organizationSectionLabels: {
    directors: "Ban Giám Đốc",
    council: "Hội Đồng Khoa Học",
    teacherLeaders: "Trưởng Nhóm Nghiên Cứu (Giảng Viên)",
    studentLeaders: "Trưởng Nhóm Nghiên Cứu (Sinh Viên)",
  },
  researchSectionLabels: {
    directions: "Định hướng Nghiên cứu",
    groups: "Các Nhóm Nghiên cứu (Labs)",
    cooperationCta: "Đề xuất hợp tác nghiên cứu",
    membersSuffix: "thành viên",
  } satisfies ResearchSectionLabels,
  cooperationSectionLabels: {
    fields: "Lĩnh Vực Hợp Tác",
    partners: "Đối Tác Chiến Lược",
    heroCta: "Khám phá cơ hội",
    learnMore: "Tìm hiểu",
    closingTitle: "Cùng Kiến Tạo Tương Lai",
    closingDescription:
      "Trở thành đối tác của AIC để cùng nhau giải quyết những thách thức công nghệ phức tạp nhất và dẫn đầu xu hướng AI.",
    closingButton: "Hợp tác với AIC",
  },
  sharedCtaLabels: {
    cooperationContact: "Liên hệ hợp tác",
  },
  studentSectionLabels: {
    researchSpace: "Không Gian Nghiên Cứu",
    researchSpaceDescription:
      "Khám phá các phòng thí nghiệm chuyên sâu được thiết kế để tối ưu hóa sự sáng tạo và năng suất nghiên cứu của sinh viên.",
    timeline: "Lộ Trình Tham Gia",
    timelineDescription:
      "Quy trình tuyển chọn minh bạch và lộ trình phát triển rõ ràng dành cho nghiên cứu sinh thực tập.",
    heroCta: "Tham gia với chúng tôi",
    closingTitle: "Sẵn sàng kiến tạo tương lai AI?",
    closingButton: "Tham gia với chúng tôi",
  },
  contactSectionLabels: {
    heroTitle: "Liên hệ với chúng tôi",
    heroDescription:
      "Trung tâm Nghiên cứu và Ứng dụng Trí tuệ Nhân tạo (AIC) luôn sẵn sàng kết nối, hợp tác và chia sẻ không gian nghiên cứu chuyên sâu.",
    mapTitle: "Bản đồ vị trí AIC",
  },
  navigationLabels: {
    about: "Về chúng tôi",
    organization: "Tổ chức",
    research: "Nghiên cứu",
    cooperation: "Hợp tác",
    students: "Dành cho sinh viên",
    contact: "Liên hệ",
  },
};

const en = {
  aboutSectionLabels: {
    homeHeading: "About Us",
    introHeading: "Introduction",
    visionHeading: "Vision",
    missionHeading: "Mission",
    videoHeading: "Introduction Video",
    parentUnitHeading: "Parent Unit",
  } satisfies AboutSectionLabels,
  organizationSectionLabels: {
    directors: "Board of Directors",
    council: "Scientific Council",
    teacherLeaders: "Research Group Leaders (Lecturers)",
    studentLeaders: "Research Group Leaders (Students)",
  },
  researchSectionLabels: {
    directions: "Research Directions",
    groups: "Research Groups (Labs)",
    cooperationCta: "Propose research cooperation",
    membersSuffix: "members",
  } satisfies ResearchSectionLabels,
  cooperationSectionLabels: {
    fields: "Cooperation Fields",
    partners: "Strategic Partners",
    heroCta: "Explore opportunities",
    learnMore: "Learn more",
    closingTitle: "Co-creating the Future",
    closingDescription:
      "Become a partner of AIC to solve the most complex technology challenges together and lead the AI trend.",
    closingButton: "Partner with AIC",
  },
  sharedCtaLabels: {
    cooperationContact: "Contact for Cooperation",
  },
  studentSectionLabels: {
    researchSpace: "Research Space",
    researchSpaceDescription:
      "Explore specialized laboratories designed to optimize creativity and student research productivity.",
    timeline: "Participation Timeline",
    timelineDescription:
      "Transparent selection process and clear development roadmap for student researchers.",
    heroCta: "Join us",
    closingTitle: "Ready to shape the AI future?",
    closingButton: "Join us now",
  },
  contactSectionLabels: {
    heroTitle: "Contact Us",
    heroDescription:
      "The Artificial Intelligence Research and Application Center (AIC) is always ready to connect, cooperate, and share in-depth research spaces.",
    mapTitle: "AIC Location Map",
  },
  navigationLabels: {
    about: "About Us",
    organization: "Organization",
    research: "Research",
    cooperation: "Cooperation",
    students: "Students",
    contact: "Contact",
  },
};

export const labelsVi = vi;
export const labelsEn = en;

// Backwards-compatible Vietnamese defaults for non-React consumers and tests.
export const aboutSectionLabels = vi.aboutSectionLabels;
export const organizationSectionLabels = vi.organizationSectionLabels;
export const researchSectionLabels = vi.researchSectionLabels;
export const cooperationSectionLabels = vi.cooperationSectionLabels;
export const sharedCtaLabels = vi.sharedCtaLabels;
export const studentSectionLabels = vi.studentSectionLabels;
export const contactSectionLabels = vi.contactSectionLabels;

export function useLabels() {
  const { language } = useLanguage();
  return language === "en" ? en : vi;
}
