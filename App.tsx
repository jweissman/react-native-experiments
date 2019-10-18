import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, FlatList, SafeAreaView} from 'react-native';

type Album = {
    id: number
    title: string
    artist: string
}

function AlbumView({ album, index }: { album: Album, index: number }) {
  return <Text style={styles.text} testID={`album-${index}`}>
        {album.title} by {album.artist}
    </Text>
}

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        margin: 20,
        fontSize: 30,
    },
    button: {
        justifyContent: "center",
        backgroundColor: '#f2c113',
        width: 200,
        height: 50,
        borderRadius: 5,
        margin: 10,
    },
    buttonText: {
        fontSize: 25,
        textAlign: "center",
    }
});
