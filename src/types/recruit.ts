export type Faq = {
    question: string;
    answer: string;
};

export type RecruitmentNotice = {
    id?: number;
    title: string;
    generation?: number;
    start_date: string;
    end_date: string;
    application_url: string;
    is_active: boolean;
};

export type CoreValue = {
    id: string;
    key: string;
    title: string;
    description: string;
    order_index: number;
};
