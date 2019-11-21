import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import NavTemplate from './NavTemplate';
import { findByTestID } from '../../support/specHelper';

const renderComponent = () => {
    let props: any = {
        pageTitle: 'My Treatment Plan',
        navigation: jest.fn()
    }

    return mount(<NavTemplate
      {...props}
    />);
}

describe("NavTemplate", () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
        wrapper = renderComponent();
    })

    describe("structure", () => {
        it('has a logo', () => {
            let logo = findByTestID("logo", wrapper);
            expect(logo.exists()).toBe(true);
        })

        it("has a header with page title", () => {
            let title = findByTestID("PageTitle", wrapper)
            expect(title.first().text()).toBe("My Treatment Plan")
        })

        describe("footer", () => {
            let footer: ReactWrapper;
            beforeEach(() => {
                footer = findByTestID("Footer", wrapper)
                expect(footer.exists()).toBe(true);
            })

            it("providers", () => {
                let myProviders = findByTestID("MyDoctorsNavButton", wrapper)
                expect(myProviders.exists()).toBe(true);
            })

            it("home", () => {
                let myHome = findByTestID("HomeNavButton", wrapper)
                expect(myHome.exists()).toBe(true)
            })

            test.todo("messages")
            test.todo("appointments")
        });
    })
})