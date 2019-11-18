import React from "react";
import store from "../Store";
import DoctorContext, { DoctorProps } from "./DoctorContext";
import MyNovant from "../system/MyNovant";

class DoctorProvider extends React.Component {
    loadDoctors = async () => {
        console.log("LOAD DOCS")
        let result = await MyNovant.doctors();
        console.log("GOT DOCS?", result)
        this.setState({ doctors: result })
    }

    state: DoctorProps = {
        doctors: [],
        fetchDoctors: this.loadDoctors,
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