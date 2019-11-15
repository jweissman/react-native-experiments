import {Doctor} from "./Doctor";

type Appointment = {
    provider: Doctor,
    service: string,
    startTime: number, // epoch date?
}

export { Appointment };