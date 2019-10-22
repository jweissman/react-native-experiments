import { Doctor, describeDoctor } from "./Doctor";

describe("Doctors", () => {
    let doctor: Doctor = { name: "Marvel", speciality: "Neurology" };
    describe("properties", () => {
        it('has a name', () => {
            expect(doctor.name).toEqual("Marvel")
            expect(doctor.speciality).toEqual("Neurology")
        })

    })
    it('can be described', () => {
        expect(describeDoctor(doctor)).toEqual("Dr. Marvel, Neurology")
    })
})