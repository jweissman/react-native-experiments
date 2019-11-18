import React from 'react';
import { ReactWrapper, mount } from "enzyme";
import LoginPage from './LoginPage';
import { findByTestID } from '../../support/specHelper';

import MyNovant from '../../system/MyNovant';
jest.mock('../../system/MyNovant.ts');

const navigate = jest.fn();
const renderComponent = () => {
    return mount(<LoginPage
        // @ts-ignore
        navigation={{
            navigate
        }}
    />)
}

describe("LoginPage", () => {
    let wrapper: ReactWrapper;
    beforeEach(() => {
        wrapper = renderComponent();
    })

    describe("function", () => {
        
        it('invokes navigation', () => {
            let loginButton = findByTestID("loginButton", wrapper);
            loginButton.first().props().onPress();
            expect(navigate).toHaveBeenCalledWith("Welcome");
        });

        test.todo("given invalid creds, does not navigate");

        it('calls the authentication service', () => {
            let username = findByTestID("username", wrapper);
            let password = findByTestID("password", wrapper);
            username.first().props().onChangeText("Patricia")
            password.first().props().onChangeText("Cakes")

            let loginButton = findByTestID("loginButton", wrapper);
            loginButton.first().props().onPress();
            expect(MyNovant.authenticate).toHaveBeenCalledWith({
                user: "Patricia", pass: "Cakes"
            });
        })
    })
})