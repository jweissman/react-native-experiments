import React from 'react';
import { ReactWrapper, mount } from "enzyme";
import { LoginTemplate } from "./LoginTemplate";
import { findByTestID } from '../../support/specHelper';

const onSubmitCallback = jest.fn();

const renderComponent = () => {
    return mount(<LoginTemplate
      onSubmit={onSubmitCallback}
    />);
}

type Structure = {
    username: () => ReactWrapper<{onChangeText: Function}>,
    password: () => ReactWrapper<{onChangeText: Function}>,
    loginButton: () => ReactWrapper<{onPress: Function, disabled: boolean}>
};

describe("LoginTemplate", () => {
    let wrapper: ReactWrapper;
    let structure: Structure = {
        username: null,
        password: null,
        loginButton: null
    }

    beforeEach(() => {
        wrapper = renderComponent();
        structure = {
            username: () => findByTestID("username", wrapper),
            password: () => findByTestID("password", wrapper),
            loginButton: () => findByTestID("loginButton", wrapper),
        }

        structure.username().first().props().onChangeText("")
        structure.password().first().props().onChangeText("")
        wrapper.update();
    })

    describe("structure", () => {
        it('has username and password controls', () => {
            expect(structure.username().exists()).toBeTruthy();
            expect(structure.password().exists()).toBeTruthy();
        });

        describe("login button", () => {
            it('exists', () => {
                expect(structure.loginButton().exists()).toBeTruthy();
            })

            it("is disabled", () => {
                let isDisabled = structure.loginButton().first().props().disabled;
                expect(isDisabled).toBeTruthy();
            });

            it("is enabled when values are entered to form controls", () => {
                structure.username().first().props().onChangeText("patty");
                structure.password().first().props().onChangeText("cakes");
                wrapper.update();
                let isDisabled = structure.loginButton().first().props().disabled;
                expect(isDisabled).toBeFalsy();
            })
        });
    });

    describe("function", () => {
        describe("onSubmit", () => {
            it("submits username/pass as obj to callback", () => {

                structure.loginButton().first().props().onPress()
                expect(onSubmitCallback).toHaveBeenCalledWith({
                    username: "",
                    password: "",
                })

                structure.username().first().props().onChangeText("patty")
                structure.password().first().props().onChangeText("cakes")
                structure.loginButton().first().props().onPress()
                expect(onSubmitCallback).toHaveBeenCalledWith({
                    username: "patty",
                    password: "cakes",
                })
            });
        });
    })
});