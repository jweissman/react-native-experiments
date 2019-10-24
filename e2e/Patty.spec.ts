import {by, element, expect} from 'detox';
import {reloadApp} from "detox-expo-helpers";

describe('Patty Patient', () => {
    beforeEach(async () => {
        await reloadApp();
    });

    it('should gather my favorite albums when the get-albums button is clicked', async () => {
        await expect(element(by.id("FavAlbumButton"))).toExist();
        await expect(element(by.id("album-list"))).toNotExist();
        await element(by.id("FavAlbumButton")).tap();
        await expect(element(by.id("album-list"))).toExist();
        await expect(element(by.id("album-0"))).toHaveLabel("Nevermind by Nirvana");
        await expect(element(by.id("album-1"))).toHaveLabel("Pet Sounds by The Beach Boys");
        await expect(element(by.id("album-2"))).toHaveLabel("What's Going On by Marvin Gaye");
    });

    it('should navigate to my list of doctors', async () => {
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