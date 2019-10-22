import React from 'react';
import {Text} from 'react-native';
import styles from '../../Style';
import Album from '../../values/Album';

function AlbumView({ album, index }: { album: Album, index: number }) {
  return <Text style={styles.text} testID={`album-${index}`}>
      {album.title} by {album.artist}
  </Text>;
}

export default AlbumView;