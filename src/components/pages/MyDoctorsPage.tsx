import React from 'react';
import { Text, ListItem, Body, Right, Icon } from 'native-base';
import { DoctorPresenter, Doctor } from '../../values/Doctor';
import { NavProps } from '../../values/NavProps';
import { DoctorProps } from '../../contexts/DoctorContext';
import withDoctors from '../../contexts/withDoctors';
import ListTemplate from '../templates/ListTemplate';

class MyDoctorsList extends ListTemplate<Doctor> {}

class MyDoctorsPage extends React.Component<NavProps & DoctorProps> {
    handlePress = (doctor: Doctor) => {
        this.props.navigation.navigate("DoctorDetailView", {
            doctorId: doctor.id 
        });
    }

    handleBack = () => {
        this.props.navigation.navigate("Welcome");
    }

    render() {
        let { doctors } = this.props;
        return <MyDoctorsList
            title="My Doctors!"
            items={doctors}
            onNavigateBack={this.handleBack}
            renderItem={({ item: doctor, index }) =>
                <ListItem
                    button
                    onPress={() => this.handlePress(doctor)}
                >
                    <Body>
                        <Text key={doctor.id} testID={`Doctor ${index}`}>
                            {DoctorPresenter.for(doctor).title()}
                        </Text>
                    </Body>
                    <Right>
                        <Icon active name="arrow-forward" />
                    </Right>
                </ListItem>
            }
        />;
    }
}

export default withDoctors(MyDoctorsPage);