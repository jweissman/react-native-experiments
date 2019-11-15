import MyNovantAPI from "./MyNovantAPI";
import {Doctor} from "../values/Doctor";
import {Appointment} from "../values/Appointment";

describe("MyNovant API", () => {
    it('it provides appointment details', () => {
        let api = new MyNovantAPI();
        let provider: Doctor = {
            id: -1234,
            name: 'Moreau',
            practice: "Neurology",
        };
        let actualAppointments: Appointment[] = api.appointments();
        expect(actualAppointments).toEqual([
            { provider, service: 'Knee Consultation', startTime: 1330, },
            { provider, service: 'Check-up', startTime: 1445 },
        ]);
    });
});