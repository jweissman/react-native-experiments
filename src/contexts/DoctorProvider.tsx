import React from "react";
import store from "../Store";
import DoctorContext, { DoctorState } from "./DoctorContext";

class DoctorProvider extends React.Component {
    state: DoctorState = {
        doctors: store.doctors,
    }

    render() {
        return (
            <DoctorContext.Provider value={this.state}>
                {this.props.children}
            </DoctorContext.Provider>
        );
    }
}

export default DoctorProvider;