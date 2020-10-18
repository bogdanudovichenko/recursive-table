export interface Item {
    seq?: number;
    id: string;
    name: string;
    description: string;
    children?: Item[]
}