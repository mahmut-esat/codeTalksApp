// Rooms.js

import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import parseContentData from '../../utils/parseContentData';
import ContentInputModal from '../../components/modal/ContentInputModal';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import styles from './Rooms.style';
import RoomCard from '../../components/card/RoomCard'

function Rooms({navigation}) {
  const [visible, setVisible] = useState(false);
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    database()
      .ref('Rooms')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parse = parseContentData(contentData || {});
        setContentList(parse);
      });
  }, []);

  const handleRoomPress = room => {
    navigation.navigate('MessagesPage', room);
  };

  function handleInputToggle() {
    setVisible(!visible);
  }

  const handleSendRoom = roomText => {
    handleInputToggle();
    sendContent(roomText);
  };

  const sendContent = content => {
    const user = auth().currentUser.email;
    const data = {
      roomCreator: user.split('@')[0],
      room: content,
    };
    database().ref('Rooms').child(content).push(data);
  };



  const renderRoom = ({item}) => {
    return <RoomCard rooms={item} onPress={handleRoomPress} />;
  };
  

  return (
    <View style={styles.container}>
      <View>
        <FlatList data={contentList} renderItem={renderRoom} numColumns={2} />
      </View>
      <ContentInputModal
        visible={visible}
        onClose={handleInputToggle}
        onSend={handleSendRoom}
        placeholder="Enter the room"
      />
      <FloatingButton iconName={'plus'} onPress={handleInputToggle} />
    </View>
  );
}

export default Rooms;