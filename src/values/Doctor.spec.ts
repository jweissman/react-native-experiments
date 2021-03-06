import { Doctor, DoctorPresenter } from "./Doctor";

describe("Doctors", () => {
    let doctor: Doctor = { id: -1, name: "Marvel", practice: "Neurology" };
    describe("properties", () => {
        it('has a name', () => {
            expect(doctor.name).toEqual("Marvel")
            expect(doctor.practice).toEqual("Neurology")
        })

    })
    it('can be described', () => {
        expect(DoctorPresenter.for(doctor).title()).toEqual("Doctor Marvel, Neurology")
    })
})