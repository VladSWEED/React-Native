import React, { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  
  const onPress = () => {
    if (!!value) {
      onSubmit(value);
      setValue('')
    } else {
      Alert.alert('Название дела не может быть пустым')
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Введите название"
        // autoCorrect={false}
      />
      <Button title="Добавить" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#8847bb',
  },
});
