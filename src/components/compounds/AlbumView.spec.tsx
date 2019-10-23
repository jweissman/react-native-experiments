import React from 'react';
import { shallow, ShallowWrapper, mount, ReactWrapper } from 'enzyme';
import AlbumView from './AlbumView';
import {Text} from 'native-base';
import Album from '../../values/Album';

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

    describe("structure", () => {
        it('displays the album title and artist', () => {
            wrapper = renderComponent(albums.trick);
            expect(wrapper.containsMatchingElement(<Text>Trick by (Sandy) Alex G</Text>)).toEqual(true);

            wrapper = renderComponent(albums.ten);
            expect(wrapper.containsMatchingElement(<Text>Ten by Pearl Jam</Text>)).toEqual(true);
        });
    });

    test.todo("functionality?")
})