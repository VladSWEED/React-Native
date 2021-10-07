import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export const AddTodo = ({ onSubmit }) => {
  const onPress = (title) => {
    onSubmit('QWERTY');
  };
  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
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
