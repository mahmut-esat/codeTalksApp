import React from 'react';
import {View, Text} from 'react-native';

import styles from './MessageCard.style';

function MessageCard({message}) {

  return !!message.context ? (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.user_text}>{message.username}</Text>
        <Text style={styles.date_text}>{message.date}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.content_text}>{message.context}</Text>
      </View>
    </View>
  ) : (
    <View></View>
  );
}

export default MessageCard;
