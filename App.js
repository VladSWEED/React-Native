import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MainScreen } from './src/Screens/MainScreen';
import { Navbar } from './src/Components/Navbar';
import { TodoScreen } from './src/Screens/TodoScreen';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(null);

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
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  let selectedTodo;

  if (todoId) {
    selectedTodo = todos.find(item => item.id === todoId)
  }

  const goBack = () => {
    setTodoId(null)
  }

  return (
    <View>
      <Navbar title="React Native" />
      <View style={styles.container}>
        {!!todoId ? (
          <TodoScreen todo={selectedTodo} goBack={goBack} />
          ) : (
          <MainScreen todos={todos} onRemove={onRemove} addTodos={addTodos} setTodoId={setTodoId} />
        )}
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
