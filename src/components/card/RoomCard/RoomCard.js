import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './RoomCard.style';

function RoomsCard({rooms, onPress}) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => onPress(rooms)}>
      <Text style={styles.text}>{rooms.roomName}</Text>
    </TouchableOpacity>
  );
}

export default RoomsCard;