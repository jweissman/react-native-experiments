import {Doctor} from "./Doctor";
import { Facility } from "./Facility";

type Appointment = {
    id: number
    provider: Doctor,
    type: string,
    dateTime: number, // epoch date?
    facility: Facility,
}

export { Appointment };