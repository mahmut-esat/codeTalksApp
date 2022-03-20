import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import Modal from 'react-native-modal';

import Button from '../Button';
import styles from './ContentInputModal.style';

const ContentInputModal = ({visible, onClose, onSend, placeholder}) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (!text) {
      return;
    }
    onSend(text);
    setText(null);
  };

  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
        <TextInput
            style={styles.input_text}
            placeholder={placeholder}
            onChangeText={setText}
            placeholderTextColor="#bbdefb"
            multiline
          />
        </View>
        <Button text={'Send'} onPress={handleSend} />
      </View>
    </Modal>
  );
};

export default ContentInputModal;
