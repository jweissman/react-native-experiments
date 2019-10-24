import React from 'react';
import { Doctor } from '../values/Doctor';

export type DoctorProps = {
    doctors: Doctor[],
    fetchDoctors: () => void
}

const DoctorContext = React.createContext<DoctorProps>({
    doctors: [],
    fetchDoctors: () => {},
}) 

const DoctorConsumer = DoctorContext.Consumer;

export { DoctorConsumer };
export default DoctorContext;