type Practice = 'Neurology' | 'Psychology'
type Doctor = {
    id: number,
    name: string,
    practice: Practice,
}

class DoctorPresenter {
    constructor(private doctor: Doctor) {}
    static for(doctor: Doctor) {
        return new DoctorPresenter(doctor);
    }
    title() {
        return `Doctor ${this.doctor.name}, ${this.doctor.practice}`;
    }
}

export { Doctor };
export { DoctorPresenter };