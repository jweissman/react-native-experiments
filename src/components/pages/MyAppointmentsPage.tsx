import React from "react";
import MyNovantApi from "../../system/MyNovant";
import { Appointment } from "../../values/Appointment";
import NavTemplate from "../templates/NavTemplate";
import { NavProps } from "../../values/NavProps";
import { Text } from 'native-base';
import { AppointmentCard } from "../compounds/AppointmentCard";

class MyAppointmentsPage extends React.Component<NavProps, { appointments: Appointment[] }> {
    state = { appointments: [] }
    componentDidMount = async () => {
        this.setState({ 
            appointments: await MyNovantApi.appointments()
        });
    }

    render() {
        let { appointments } = this.state;
        return appointments && <NavTemplate
            pageTitle="My Appointments"
            navigation={this.props.navigation}
        >
            <Text>{appointments.length} appointments here</Text>
            {
                appointments.map((appointment: Appointment) =>
                    <AppointmentCard
                        key={appointment.id}
                        {...appointment}
                    />
                )
            }
        </NavTemplate> || <Text>Loading</Text>
    }
}

export default MyAppointmentsPage;