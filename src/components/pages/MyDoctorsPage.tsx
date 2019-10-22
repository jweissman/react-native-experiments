import React from 'react';
import { Container, Text, Footer, Header, Button, Title, Body, ListItem, List } from 'native-base';
import { DoctorPresenter } from '../../values/Doctor';
import { NavProps } from '../../values/NavProps';
import { DoctorProps } from '../../contexts/DoctorContext';
import withDoctors from '../../contexts/withDoctors';

class MyDoctorsPage extends React.Component<NavProps & DoctorProps> {
    render() {
        let { doctors } = this.props;
        return (
            <Container>
                <Header>
                    <Title testID="PageTitle">My Doctors!</Title>
                </Header>

                <Body>
                    <Text>Doctors list...</Text>
                    {doctors && <>
                        <Text>I have {doctors.length} doctors</Text>
                        <List testID="DoctorsList" dataArray={doctors} keyExtractor={(doctor) => String(doctor.id)} renderItem={({ item: doctor, index }) => <ListItem button onPress={() => this.props.navigation.navigate("DoctorDetailView", { doctorId: doctor.id })}>
                            <Text key={doctor.id} testID={`Doctor ${index}`}>
                                {DoctorPresenter.for(doctor).title()}
                            </Text>
                        </ListItem>} />
                    </>}
                </Body>

                <Button testID="GoBackHome" onPress={() => this.props.navigation.navigate("Welcome")}>
                    <Text>Take me back home</Text>
                </Button>
                <Footer>
                </Footer>
            </Container>
        );
    }
}

export default withDoctors(MyDoctorsPage);