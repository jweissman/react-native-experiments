import React from "react";
import DoctorContext, { DoctorProps } from "./DoctorContext";
import MyNovant from "../system/MyNovant";

class DoctorProvider extends React.Component<{}, DoctorProps> {
    loadDoctors = async () => {
        let doctors = await MyNovant.doctors();
        this.setState({ doctors });
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