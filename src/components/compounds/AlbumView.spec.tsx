import React from 'react';
import { shallow, ShallowWrapper, mount, ReactWrapper } from 'enzyme';
import AlbumView, { Album } from './AlbumView';
import {Text} from 'react-native';

let albums: { [name: string]: Album } = {
    trick: {
        id: -1,
        title: "Trick",
        artist: "(Sandy) Alex G",
    },
    ten: {
        id: -2,
        title: "Ten",
        artist: "Pearl Jam",
    }
}

const renderComponent = (album: Album) => {
    return shallow(<AlbumView
        album={album}
        index={-1}
    />);
}

describe("Album view", () => {
    let wrapper: ShallowWrapper;

    it('displays the album name', () => {
        wrapper = renderComponent(albums.trick);
        let albumListEntry = wrapper.find(Text).first();
        let message = albumListEntry.shallow().text();
        expect(message).toContain("Trick");

        wrapper = renderComponent(albums.ten);
        albumListEntry = wrapper.find(Text).first();
        message = albumListEntry.shallow().text();
        expect(message).toContain("Ten");
    });

    it('displays the album artist', () => {
        wrapper = renderComponent(albums.trick);
        let entry = wrapper.find(Text).first();
        let message = entry.shallow().text();
        expect(message).toContain("(Sandy) Alex G")

        wrapper = renderComponent(albums.ten);
        entry = wrapper.find(Text).first();
        message = entry.shallow().text();
        expect(message).toContain("Pearl Jam")
    });
})