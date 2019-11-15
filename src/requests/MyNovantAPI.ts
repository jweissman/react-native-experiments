import {Appointment} from "../values/Appointment";
import {Doctor} from "../values/Doctor";

class MyNovantAPI {
    appointments(): Appointment[] {
        let provider: Doctor = {
            id: -1234,
            name: 'Moreau',
            practice: "Neurology",
        };

        return [
            { provider, service: "Knee Consultation", startTime: 1330 },
            { provider, service: "Check-up", startTime: 1445 },
        ];
    }
}

export default MyNovantAPI;