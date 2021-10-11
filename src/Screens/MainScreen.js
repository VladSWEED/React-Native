import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { AddTodo } from '../Components/AddTodo';
import { Todo } from '../Components/Todo';

export const MainScreen = ({onRemove, addTodos, todos, setTodoId}) => {
  return (
    <View>
       <AddTodo onSubmit={addTodos} />
        <FlatList
          data={todos}
          renderItem={({item}) => <Todo todo={item} onRemove={onRemove} setTodoId={setTodoId} />}
          keyExtractor={item => item.id.toString()}
        />
    </View>
  );
};

const styles = StyleSheet.create({});
