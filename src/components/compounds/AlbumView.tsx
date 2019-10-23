import React from 'react';
import {Text} from 'native-base';
import Album from '../../values/Album';

function AlbumView({ album, index }: { album: Album, index: number }) {
  return <Text testID={`album-${index}`}>
      {album.title} by {album.artist}
  </Text>;
}

export default AlbumView;