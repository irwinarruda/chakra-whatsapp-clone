import { Message } from './Message';

export interface Chat {
    id: string;
    users: string[];
    messages: Message[];
}
