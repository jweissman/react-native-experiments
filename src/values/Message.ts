import { Doctor } from "./Doctor";

export type Message = {
    id: number,
    from: Doctor,
    text: string,
    subject: string,
    dateTimeSent: string,
}