import React from 'react';
import { ReactWrapper, mount } from "enzyme";
import LoginPage from './LoginPage';
import { findByTestID } from '../../support/specHelper';
import NovantHealthLogo from "../../assets/novanthealthlogo";

import MyNovantApi from '../../system/MyNovant';
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
        navigate.mockClear();

        let username = findByTestID("username", wrapper);
        let password = findByTestID("password", wrapper);
        username.first().props().onChangeText("Patricia")
        password.first().props().onChangeText("Cakes")

        // update wrapper?
        wrapper.update();
    })

    describe("structure", () => {
        it('has an active login button', () => {
            let loginButton = findByTestID("loginButton", wrapper);
            expect(loginButton.first().props().disabled).toBeFalsy();
        });

        it('has a logo in the header', () => {
            expect(wrapper.find(NovantHealthLogo).exists()).toBeTruthy()
        })
    });

    describe("function", () => {
        it('invokes navigation', async () => {
            MyNovantApi.authenticate = jest.fn().mockReturnValue(true);
            let loginButton = findByTestID("loginButton", wrapper);
            await loginButton.first().props().onPress();
            expect(navigate).toHaveBeenCalledWith("Welcome");
        });

        it("given invalid creds, does not navigate", async () => {
            MyNovantApi.authenticate = jest.fn().mockReturnValue(false);
            let loginButton = findByTestID("loginButton", wrapper);
            await loginButton.first().props().onPress();
            expect(navigate).not.toHaveBeenCalled();
        });

        it('calls the authentication service', () => {
            let loginButton = findByTestID("loginButton", wrapper);
            loginButton.first().props().onPress();
            expect(MyNovantApi.authenticate).toHaveBeenCalledWith({
                user: "Patricia", pass: "Cakes"
            });
        })
    })
})