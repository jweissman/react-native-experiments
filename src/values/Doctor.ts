type Speciality = 'Neurology' | 'Oneirology' | 'Psychology'
type Doctor = {
    id: number,
    name: string,
    speciality: Speciality,
}

class DoctorPresenter {
    constructor(private doctor: Doctor) {}
    static for(doctor: Doctor) {
        return new DoctorPresenter(doctor);
    }
    title() {
        return `Doctor ${this.doctor.name}, ${this.doctor.speciality}`;
    }
}

export { Doctor };
export { DoctorPresenter };