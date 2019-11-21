import {by, element, expect} from 'detox';
import {reloadApp} from "detox-expo-helpers";

const logMeIn = async () => {
    // given i'm on the login page
    await expect(element(by.id("loginButton"))).toExist();

    // when i enter valid credentials
    await expect(element(by.id("username"))).toExist();
    await expect(element(by.id("password"))).toExist();
    
    // and i press "Log In"
    await element(by.id("loginButton")).tap();
}

describe('Patty Patient', () => {
    beforeEach(async () => {
        await reloadApp();
        // given i have logged in
        await logMeIn();
    });

    it('logs in with valid credentials', async () => {
        // then i'm taken to homepage
        await expect(element(by.id("PageTitle"))).toHaveLabel("Home")
    })

    it('logs out', async () => {
        // given i'm on the home page
        await expect(element(by.id("PageTitle"))).toHaveLabel("Home")

        // when i click 'Logout' button
        await element(by.id("Logout")).tap();

        // then i'm taken to login page
        await expect(element(by.id("loginButton"))).toExist();
    });

    it('navigates to her providers', async () => {
        await expect(element(by.id("PageTitle"))).toHaveLabel("Home");
        await expect(element(by.id("MyDoctorsNavButton"))).toExist();
        await element(by.id("MyDoctorsNavButton")).tap();
        await expect(element(by.id("PageTitle"))).toHaveLabel("My Providers");

        await expect(element(by.id("Doctor 0"))).toHaveLabel("Doctor Strange, Metaphysics");
        await expect(element(by.id("Doctor 1"))).toHaveLabel("Doctor Who, Chronodynamics");

        await element(by.id("Doctor 0")).tap();
        await expect(element(by.id("PageTitle"))).toHaveLabel("Doctor Strange (DETAIL)")
        await element(by.id("GoBackHome")).tap();
        await expect(element(by.id("PageTitle"))).toHaveLabel("My Providers");
        await element(by.id("HomeNavButton")).tap();
        await expect(element(by.id("PageTitle"))).toHaveLabel("Home");
    });

    it("navigates to her appointments", async () => {
        await expect(element(by.id("PageTitle"))).toHaveLabel("Home");
        await expect(element(by.id("MyAppointmentsNavButton"))).toExist();
        await element(by.id("MyAppointmentsNavButton")).tap();
        await expect(element(by.id("PageTitle"))).toHaveLabel("My Appointments");
    })

    it("navigates to her messages", async () => {
        await expect(element(by.id("PageTitle"))).toHaveLabel("Home");
        await expect(element(by.id("MyMessagesNavButton"))).toExist();
        await element(by.id("MyMessagesNavButton")).tap();
        await expect(element(by.id("PageTitle"))).toHaveLabel("My Messages");
    })
});