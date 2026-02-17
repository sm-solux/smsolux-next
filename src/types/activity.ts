export type ActivityContent = {
    title: string;
    description: string;
};

export type Activity = {
    id?: number;
    title: string;
    description: string;
    details?: ActivityContent[];
    image?: string;
    order: number;
};
