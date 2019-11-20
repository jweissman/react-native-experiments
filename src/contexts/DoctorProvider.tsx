import React from "react";
import store from "../Store";
import DoctorContext, { DoctorProps } from "./DoctorContext";
import MyNovantApi from "../system/MyNovant";

class DoctorProvider extends React.Component {
    loadDoctors = async () => {
        let result = await MyNovantApi.doctors();
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