export interface AType {
    id : string;
    title: string;
    date: string;
    description: string;
    category: string;
    city: string;
    venue: string;
}

export interface DataAct extends AType {
    data: AType[];
}