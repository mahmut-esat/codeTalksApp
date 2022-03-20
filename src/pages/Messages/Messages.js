import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import MessageCard from '../../components/card/MessageCard/';
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/modal/ContentInputModal';
import styles from './Messages.style';
import parseContentMessageData from '../../utils/parseContentMessageData';

function Messages({route}) {
  const {roomName} = route.params;

  const [visible, setVisible] = useState(false);
  const [newMessage, setNewMessage] = useState([]);

  useEffect(() => {
    database()
      .ref('Rooms')
      .child(roomName)
      .on('value', snapshot => {
        const contextData = snapshot.val();
        const parse = parseContentMessageData(contextData || {});
        setNewMessage(parse);
      });
  }, []);

  const handleToggleModal = () => {
    setVisible(!visible);
  };

  const sendMessage = content => {
    const user = auth().currentUser.email;
    const d = new Date();
    const data = {
      username: user.split('@')[0],
      date: d.toUTCString(),
      context: content,
    };
    database().ref('Rooms').child(roomName).push(data);
  };

  const renderMessage = ({item}) => {
    return <MessageCard message={item} />;
  };

  const handleSendMessage = message => {
    handleToggleModal();
    sendMessage(message);
  };

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>{roomName} Room</Text>
      </View>
      <View style={styles.data_container}>
        <FlatList data={newMessage} renderItem={renderMessage} />
      </View>
      <ContentInputModal
        visible={visible}
        onClose={handleToggleModal}
        onSend={handleSendMessage}
        placeholder={'your message'}
      />
      <FloatingButton iconName={'plus'} onPress={handleToggleModal} />
    </View>
  );
}

export default Messages;