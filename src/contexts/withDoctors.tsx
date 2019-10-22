import React from 'react';
import DoctorContext, { DoctorConsumer } from "./DoctorContext"

export function withDoctors(component: React.ComponentClass) {
    return function ComponentWithDoctors(props) {
        let Component = component;
        return (<DoctorConsumer>
               {(ctx) => <Component {...props} {...ctx} />}
        </DoctorConsumer>);
    }
}

export default withDoctors;