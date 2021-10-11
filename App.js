import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar';
import { Todo } from './src/Todo';

export default function App() {
  const arr = [
    { id: 1, title: 'jskdjskdj' },
    { id: 2, title: '12' },
    { id: 3, title: '444' },
    { id: 4, title: '555' },
    { id: 5, title: '666' },
    { id: 6, title: '7777' },
    { id: 7, title: '888' },
    { id: 8, title: 'asdasdasd' },
    { id: 9, title: '99zxczxczxc99' },
    { id: 10, title: '99rtrthfgb99' },
    { id: 11, title: 'asdwet345' },
    { id: 12, title: 'ghkk.ul' },
    { id: 13, title: 'fg45te5tg' },
    { id: 14, title: 'aweqw33' },
    { id: 15, title: 'vlad' },
  ];
  const [todos, setTodos] = useState(arr);

  const addTodos = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const onRemove = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <View>
      <Navbar title="React Native" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodos} />
        <FlatList
          data={todos}
          renderItem={({item}) => <Todo todo={item} onRemove={onRemove} />}
          keyExtractor={item => item.id.toString()}
        />
        {/* <View>
          {todos.map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))} */}
        {/* </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
});
