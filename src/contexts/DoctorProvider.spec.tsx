import React from 'react';
import { ReactWrapper, mount } from "enzyme";
import DoctorProvider from './DoctorProvider';
import { Doctor } from '../values/Doctor';

const renderComponent = () => {
    return mount(
        <DoctorProvider />
    );
}

describe("DoctorProvider", () => {
    let wrapper: ReactWrapper;
    // we call fetch at the expected place, and put the data into doctors for consumption
    xit('loads doctors from the web service', async () => {
        let expectedDoctors: Doctor[] = [{ id: -9999, name: 'John', practice: "Neurology" }]
        let mockFetchPromise = Promise.resolve({
            json: () => Promise.resolve(expectedDoctors) 
        });

        // @ts-ignore
        global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

        wrapper = renderComponent();
        let provider = wrapper.instance() as DoctorProvider;
        await provider.loadDoctors();

        // @ts-ignore
        expect(global.fetch).toHaveBeenCalled();

        // setImmediate(() => {
        expect(wrapper.update().state('doctors')).toEqual(expectedDoctors)

        // @ts-ignore
        global.fetch.mockClear();
        // @ts-ignore
        delete global.fetch;
    })
})