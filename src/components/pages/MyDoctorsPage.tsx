import React from 'react';
import { Text, ListItem, Body, Right, Icon, List } from 'native-base';
import { DoctorPresenter, Doctor } from '../../values/Doctor';
import { NavProps } from '../../values/NavProps';
import { DoctorProps } from '../../contexts/DoctorContext';
import withDoctors from '../../contexts/withDoctors';
import NavTemplate from '../templates/NavTemplate';

class MyDoctorsPage extends React.Component<NavProps & DoctorProps> {
    componentDidMount() {
        this.props.fetchDoctors();
    }

    handlePress = (doctor: Doctor) => {
        this.props.navigation.navigate("DoctorDetailView", {
            doctorId: doctor.id
        });
    }

    render() {
        return <NavTemplate
            pageTitle="My Providers"
            navigation={this.props.navigation}
        >
            <List
                dataArray={this.props.doctors}
                keyExtractor={it => String(it.id)}
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
            />
        </NavTemplate>;
    }
}

export default withDoctors(MyDoctorsPage);