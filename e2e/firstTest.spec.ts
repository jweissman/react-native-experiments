import {by, element, expect} from 'detox';
import {reloadApp} from "detox-expo-helpers";

describe('Authentication tests', () => {
    beforeEach(async () => {
        await reloadApp();
    });

    // it('can report on text values of elements', async () => {
    //     await expect(element(by.id("MainText"))).toHaveLabel("Press a button to start");
    // });

    it('should gather my favorite albums when the get-albums button is clicked', async () => {
        await expect(element(by.id("FavAlbumButton"))).toExist();
        await expect(element(by.id("album-list"))).toNotExist();
        await element(by.id("FavAlbumButton")).tap();

        await expect(element(by.id("album-0"))).toHaveLabel("Nevermind by Nirvana");
        await expect(element(by.id("album-1"))).toHaveLabel("Pet Sounds by The Beach Boys");
        await expect(element(by.id("album-2"))).toHaveLabel("What's Going On by Marvin Gaye");

        // there should be 3 albums
        // the first is "nevermind", by nirvana :D
        // i'm on a plane / i can't complain / etc.
    });
});