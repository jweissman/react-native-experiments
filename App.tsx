import React from 'react';
import {Text, TouchableOpacity, View, FlatList, SafeAreaView} from 'react-native';
import AlbumView, { Album } from './src/components/compounds/AlbumView';
import styles from './src/Style';

type State = {
  text: string,
  hasAlbums: boolean,
  albumDetails: Album[],
}

export default class App extends React.Component<State> {
    state: State = {
        text: "Press a button to start",
        hasAlbums: false,
        albumDetails: []
    };

    changeText = (newText: string) => this.setState({
        text: newText
    });

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
        return (
            <SafeAreaView style={styles.container}>
                <Text
                    style={styles.text}
                    testID="MainText"
                >
                    {this.state.text}
                </Text>

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
                        data={this.state.albumDetails}
                        renderItem={({ item, index }) =>
                            <AlbumView album={item} index={index} />
                        }
                        keyExtractor={it => String(it.id)}
                    />
                }
                </View>

                <Text
                    style={styles.text}
                    testID="MainText"
                >
                  footer
                </Text>
            </SafeAreaView>
        );
    }
}