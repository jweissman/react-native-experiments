import React from "react";
import store from "../Store";
import DoctorContext, { DoctorProps } from "./DoctorContext";

class DoctorProvider extends React.Component {
    state: DoctorProps = {
        doctors: [], //store.doctors,
        fetchDoctors: this.loadDoctors,
    }

    async loadDoctors() {
        console.log("LOAD DOCS")
        let result = await fetch('something');
        let doctors = await result.json();
        console.log("GOT DOCS?", doctors)
        // todo fetch :)
        this.setState({ doctors })
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