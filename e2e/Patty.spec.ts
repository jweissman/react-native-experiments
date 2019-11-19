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

    it('should login with valid credentials', async () => {
        // then i'm taken to homepage
        await expect(element(by.id("PageTitle"))).toHaveLabel("Home")
    })

    it('should logout', async () => {
        // given i'm on the home page
        await expect(element(by.id("PageTitle"))).toHaveLabel("Home")

        // when i click 'Logout' button
        await element(by.id("Logout")).tap();

        // then i'm taken to login page
        await expect(element(by.id("loginButton"))).toExist();
    });

    xit('should gather my favorite albums when the get-albums button is clicked', async () => {
        await expect(element(by.id("FavAlbumButton"))).toExist();
        await expect(element(by.id("album-list"))).toNotExist();
        await element(by.id("FavAlbumButton")).tap();
        await expect(element(by.id("album-list"))).toExist();
        await expect(element(by.id("album-0"))).toHaveLabel("Nevermind by Nirvana");
        await expect(element(by.id("album-1"))).toHaveLabel("Pet Sounds by The Beach Boys");
        await expect(element(by.id("album-2"))).toHaveLabel("What's Going On by Marvin Gaye");
    });

    xit('should navigate to my list of doctors', async () => {
        await expect(element(by.id("PageTitle"))).toHaveLabel("My Novant!");
        await expect(element(by.id("GoToDoctorsList"))).toExist();
        await element(by.id("GoToDoctorsList")).tap();
        await expect(element(by.id("PageTitle"))).toHaveLabel("My Doctors!");

        // await expect(element(by.id("DoctorsList"))).toExist();
        await expect(element(by.id("Doctor 0"))).toHaveLabel("Doctor Marvel, Neurology");
        await expect(element(by.id("Doctor 1"))).toHaveLabel("Doctor Strange, Psychology");

        await element(by.id("Doctor 1")).tap();
        await expect(element(by.id("PageTitle"))).toHaveLabel("Doctor Strange (DETAIL)")
        await element(by.id("GoBackHome")).tap();
        await expect(element(by.id("PageTitle"))).toHaveLabel("My Doctors!");
        await element(by.id("GoBack")).tap();
        await expect(element(by.id("PageTitle"))).toHaveLabel("My Novant!");
    });
});