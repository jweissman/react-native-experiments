import React from "react";
import Album from "../../values/Album";
import { TouchableOpacity, Text, View, FlatList } from "react-native";
import styles from "../../Style";
import AlbumView from "../compounds/AlbumView";

type State = {
  hasAlbums: boolean,
  albumDetails: Album[],
}

export default class AlbumList extends React.Component<{}, State> {
    state: State = {
        hasAlbums: false,
        albumDetails: []
    };

    fetchAlbums = async () => {
        let albumResponse = await fetch("https://spring-music-chipper-buffalo.apps.pcfone.io/albums")
        if (albumResponse.ok) {
            let data: Album[] = await albumResponse.json() 
            this.setState({
                hasAlbums: true,
                albumDetails: data
            })
        } else {
            // we are errored
            console.warn("Error fetching albums")
        }
    }

    render() {
        return <>
            <TouchableOpacity
                style={styles.button}
                testID="FavAlbumButton"
                onPress={this.fetchAlbums}
            >
                <Text style={styles.buttonText}>Get Favorite Albums</Text>
            </TouchableOpacity>
            <View style={{ height: 300 }}>
                {this.state.hasAlbums &&
                    <FlatList
                        testID="album-list"
                        data={this.state.albumDetails}
                        renderItem={({ item, index }) =>
                            <AlbumView album={item} index={index} />
                        }
                        keyExtractor={it => String(it.id)}
                    />
                }
            </View>
        </>;
    }
}