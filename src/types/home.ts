export type HomeActivity = {
    id: string;
    key: string;
    title: string;
    description: string;
};

export type Review = {
    id: string;
    name: string;
    gen: string;
    part: string;
    content: string;
    created_at?: string;
};

export type HomeStat = {
    id: string;
    label: string;
    value: string;
    order_index: number;
};
