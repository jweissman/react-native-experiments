import React from 'react';
import { ReactWrapper, mount } from "enzyme";
import DoctorProvider from './DoctorProvider';
import { Doctor } from '../values/Doctor';

import MyNovantApi from '../system/MyNovant';
jest.mock('../system/MyNovant.ts');

const renderComponent = () => {
    return mount(
        <DoctorProvider />
    );
}

describe("DoctorProvider", () => {
    let wrapper: ReactWrapper;
    it('loads doctors from the web service', async () => {
        let expectedDoctors: Doctor[] = [{ id: -9999, name: 'John', practice: "Neurology" }]
        MyNovantApi.doctors = jest.fn().mockReturnValue(expectedDoctors)
        wrapper = renderComponent();
        let provider = wrapper.instance() as DoctorProvider;
        await provider.loadDoctors();
        expect(MyNovantApi.doctors).toHaveBeenCalled();
        expect(wrapper.update().state('doctors')).toEqual(expectedDoctors)
    })
})