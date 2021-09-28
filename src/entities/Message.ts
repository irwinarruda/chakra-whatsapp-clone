export interface Message {
    id: string;
    user: string;
    type: 'text';
    message: string;
    created_at: Date;
}
