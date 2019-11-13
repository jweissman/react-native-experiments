type Speciality = 'Neurology' | 'Oneirology' | 'Psychology'
type Doctor = {
    id: number,
    name: string,
    specialization: Speciality,
}

class DoctorPresenter {
    constructor(private doctor: Doctor) {}
    static for(doctor: Doctor) {
        return new DoctorPresenter(doctor);
    }
    title() {
        return `Doctor ${this.doctor.name}, ${this.doctor.specialization}`;
    }
}

export { Doctor };
export { DoctorPresenter };