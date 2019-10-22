import React from 'react';
import { Text, Container, Header, Title, Button, Body } from 'native-base';
import { NavProps } from '../../values/NavProps';
import { DoctorProps } from '../../contexts/DoctorContext';
import withDoctors from '../../contexts/withDoctors';

class MyDoctorDetailsPage extends React.Component<NavProps & DoctorProps> {
    render() {
        let doctorId = this.props.navigation.getParam("doctorId");
        let { doctors } = this.props;
        let doctor = doctors.find(doctor => doctor.id === doctorId);
        return <Container>
            <Header>
                <Title testID="PageTitle">Doctor {doctor.name} (DETAIL)</Title>
            </Header>
            <Body>
                <Button testID="GoBackHome" onPress={() => this.props.navigation.navigate("DoctorsPage")}>
                    <Text>Take me back to list</Text>
                </Button>
            </Body>
        </Container>;
    }
}

export default withDoctors(MyDoctorDetailsPage);