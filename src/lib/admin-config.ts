export type AdminFieldType =
  | "text"
  | "textarea"
  | "number"
  | "checkbox"
  | "tags"
  | "detail-list"
  | "datetime-local";

export interface AdminFieldConfig {
  name: string;
  label: string;
  type?: AdminFieldType;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  description?: string;
}

export interface AdminSectionConfig {
  id: string;
  table: string;
  title: string;
  description: string;
  primaryKey?: string;
  publicPath: string;
  adminPath: string;
  revalidatePaths: string[];
  emptyStateLabel: string;
  fields: AdminFieldConfig[];
}

export const ADMIN_SECTIONS: Record<string, AdminSectionConfig> = {
  homeActivities: {
    id: "homeActivities",
    table: "home_activities",
    title: "Home Activity Cards",
    description: "메인 소개 섹션 카드 내용을 수정합니다.",
    primaryKey: "id",
    publicPath: "/",
    adminPath: "/admin/home",
    revalidatePaths: ["/", "/admin", "/admin/home"],
    emptyStateLabel: "메인 활동 카드가 없습니다.",
    fields: [
      {
        name: "title",
        label: "Title",
        placeholder: "프로젝트",
        required: true,
      },
      {
        name: "key",
        label: "Key",
        placeholder: "project, study, seminar, networking 중 하나",
        required: true,
      },
      {
        name: "description",
        label: "Description",
        type: "textarea",
        rows: 3,
        placeholder: "카드 설명",
        required: true,
      },
    ],
  },
  reviews: {
    id: "reviews",
    table: "reviews",
    title: "Home Reviews",
    description: "메인 후기 슬라이더에 노출되는 리뷰를 관리합니다.",
    primaryKey: "id",
    publicPath: "/",
    adminPath: "/admin/home",
    revalidatePaths: ["/", "/admin", "/admin/home"],
    emptyStateLabel: "등록된 리뷰가 없습니다.",
    fields: [
      {
        name: "name",
        label: "Name",
        placeholder: "홍길동",
        required: true,
      },
      {
        name: "gen",
        label: "Generation",
        placeholder: "34기",
        required: true,
      },
      {
        name: "part",
        label: "Part",
        placeholder: "Frontend",
        required: true,
      },
      {
        name: "content",
        label: "Content",
        type: "textarea",
        rows: 4,
        placeholder: "후기 내용",
        required: true,
      },
    ],
  },
  activities: {
    id: "activities",
    table: "activities",
    title: "Activity Timeline",
    description: "활동 페이지의 타임라인과 상세 카드를 수정합니다.",
    primaryKey: "id",
    publicPath: "/activity",
    adminPath: "/admin/activity",
    revalidatePaths: ["/activity", "/admin", "/admin/activity"],
    emptyStateLabel: "활동 데이터가 없습니다.",
    fields: [
      {
        name: "title",
        label: "Title",
        placeholder: "정기 세미나",
        required: true,
      },
      {
        name: "description",
        label: "Description",
        type: "textarea",
        rows: 4,
        placeholder: "활동 설명",
        required: true,
      },
      {
        name: "details",
        label: "Detail Cards",
        type: "detail-list",
        rows: 5,
        placeholder: "세부 제목 :: 세부 설명",
        description: "한 줄에 하나씩 입력합니다. 형식: 제목 :: 설명",
      },
      {
        name: "order",
        label: "Order",
        type: "number",
        placeholder: "0",
        required: true,
      },
    ],
  },
  projects: {
    id: "projects",
    table: "projects",
    title: "Projects Archive",
    description: "프로젝트 아카이브 데이터를 수정합니다.",
    primaryKey: "id",
    publicPath: "/project",
    adminPath: "/admin/projects",
    revalidatePaths: ["/project", "/projects", "/admin", "/admin/projects"],
    emptyStateLabel: "프로젝트가 없습니다.",
    fields: [
      {
        name: "generation",
        label: "Generation",
        type: "number",
        placeholder: "34",
        required: true,
      },
      {
        name: "year",
        label: "Year",
        type: "number",
        placeholder: "2026",
        required: true,
      },
      {
        name: "term",
        label: "Term",
        placeholder: "1학기",
        required: true,
      },
      {
        name: "title",
        label: "Title",
        placeholder: "프로젝트 이름",
        required: true,
      },
      {
        name: "team_name",
        label: "Team Name",
        placeholder: "Team SOLUX",
        required: true,
      },
      {
        name: "desc",
        label: "Description",
        type: "textarea",
        rows: 4,
        placeholder: "프로젝트 설명",
        required: true,
      },
      {
        name: "award",
        label: "Award",
        placeholder: "대상",
      },
      {
        name: "category",
        label: "Category",
        placeholder: "Web / App / Game / Data / Web&Data",
        required: true,
      },
      {
        name: "stacks",
        label: "Stacks",
        type: "tags",
        placeholder: "Next.js, Supabase, Figma",
      },
      {
        name: "image",
        label: "Image URL",
        placeholder: "https://... 또는 bucket/path/to/file.png",
      },
      {
        name: "link",
        label: "Project URL",
        placeholder: "https://...",
      },
    ],
  },
  recruitments: {
    id: "recruitments",
    table: "recruitments",
    title: "Recruitment Banner",
    description: "현재 모집 공고와 지원 링크를 수정합니다.",
    primaryKey: "id",
    publicPath: "/recruit",
    adminPath: "/admin/recruit",
    revalidatePaths: ["/recruit", "/admin", "/admin/recruit"],
    emptyStateLabel: "모집 공고가 없습니다.",
    fields: [
      {
        name: "title",
        label: "Title",
        placeholder: "35기 신입 부원 모집",
        required: true,
      },
      {
        name: "generation",
        label: "Generation",
        type: "number",
        placeholder: "35",
      },
      {
        name: "start_date",
        label: "Start Date",
        type: "datetime-local",
        required: true,
      },
      {
        name: "end_date",
        label: "End Date",
        type: "datetime-local",
        required: true,
      },
      {
        name: "application_url",
        label: "Application URL",
        placeholder: "https://...",
        required: true,
      },
      {
        name: "is_active",
        label: "Active Recruitment",
        type: "checkbox",
        description: "체크된 공고가 현재 모집 배너에 노출됩니다.",
      },
    ],
  },
  recruitCoreValues: {
    id: "recruitCoreValues",
    table: "recruit_core_values",
    title: "Recruit Core Values",
    description: "리크루팅 핵심 가치 카드를 수정합니다.",
    primaryKey: "id",
    publicPath: "/recruit",
    adminPath: "/admin/recruit",
    revalidatePaths: ["/recruit", "/admin", "/admin/recruit"],
    emptyStateLabel: "핵심 가치 카드가 없습니다.",
    fields: [
      {
        name: "key",
        label: "Key",
        placeholder: "growth / solidarity / responsibility",
        required: true,
      },
      {
        name: "title",
        label: "Title",
        placeholder: "성장",
        required: true,
      },
      {
        name: "description",
        label: "Description",
        type: "textarea",
        rows: 4,
        placeholder: "핵심 가치 설명",
        required: true,
      },
      {
        name: "order_index",
        label: "Order",
        type: "number",
        placeholder: "0",
        required: true,
      },
    ],
  },
  faqs: {
    id: "faqs",
    table: "faqs",
    title: "Recruit FAQs",
    description: "리크루팅 FAQ를 추가하고 순서대로 관리합니다.",
    primaryKey: "id",
    publicPath: "/recruit",
    adminPath: "/admin/recruit",
    revalidatePaths: ["/recruit", "/admin", "/admin/recruit"],
    emptyStateLabel: "FAQ가 없습니다.",
    fields: [
      {
        name: "question",
        label: "Question",
        type: "textarea",
        rows: 2,
        placeholder: "자주 묻는 질문",
        required: true,
      },
      {
        name: "answer",
        label: "Answer",
        type: "textarea",
        rows: 4,
        placeholder: "답변",
        required: true,
      },
    ],
  },
  footerLinks: {
    id: "footerLinks",
    table: "footer_links",
    title: "Footer Links",
    description: "푸터 아이콘과 URL을 별도 섹션에서 관리합니다.",
    primaryKey: "id",
    publicPath: "/",
    adminPath: "/admin/links",
    revalidatePaths: ["/", "/admin", "/admin/links"],
    emptyStateLabel: "푸터 링크가 없습니다.",
    fields: [
      {
        name: "key",
        label: "Key",
        placeholder: "instagram / github / email / kakao",
        required: true,
      },
      {
        name: "label",
        label: "Label",
        placeholder: "Instagram",
        required: true,
      },
      {
        name: "url",
        label: "URL",
        placeholder: "https://...",
        required: true,
      },
      {
        name: "icon_name",
        label: "Icon Name",
        placeholder: "instagram",
      },
      {
        name: "order_index",
        label: "Order",
        type: "number",
        placeholder: "0",
        required: true,
      },
    ],
  },
};

export const ADMIN_NAV_ITEMS = [
  {
    href: "/admin/home",
    label: "Home",
    eyebrow: "/",
    description: "메인 활동 카드와 후기",
  },
  {
    href: "/admin/activity",
    label: "Activity",
    eyebrow: "/activity",
    description: "활동 타임라인 관리",
  },
  {
    href: "/admin/projects",
    label: "Projects",
    eyebrow: "/project",
    description: "프로젝트 아카이브",
  },
  {
    href: "/admin/recruit",
    label: "Recruit",
    eyebrow: "/recruit",
    description: "모집 공고와 FAQ",
  },
  {
    href: "/admin/links",
    label: "Links",
    eyebrow: "Footer",
    description: "푸터 링크와 아이콘",
  },
];
