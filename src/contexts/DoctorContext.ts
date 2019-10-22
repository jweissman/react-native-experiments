import React from 'react';
import { Doctor } from '../values/Doctor';

export type DoctorState = { doctors: Doctor[] }
export type DoctorProps = DoctorState;

const DoctorContext = React.createContext<DoctorState>({
    doctors: [],
}) 

const DoctorConsumer = DoctorContext.Consumer;

export { DoctorConsumer };
export default DoctorContext;