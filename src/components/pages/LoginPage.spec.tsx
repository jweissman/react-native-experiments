import React from 'react';
import {ShallowWrapper} from "enzyme";
import {LoginPage} from "./LoginPage";
import {Header} from "native-base";
import NovantHealthLogo from "../../assets/novanthealthlogo";


describe('Login Page',() => {

    const createTestProps = (props: Object) => ({
        navigation: {
            navigate: jest.fn()
        },
        ...props
    });

    it('has a logo in the header', () => {
        let props:any = createTestProps({})

        let wrapper = new ShallowWrapper(<LoginPage {...props}/>)

        expect(wrapper.find(NovantHealthLogo).exists()).toBeTruthy()
    })

});