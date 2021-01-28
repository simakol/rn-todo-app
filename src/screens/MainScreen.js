import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";

export const MainScreen = ({ addTodo, todos, removeTodo, goToTodo }) => {
  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.todosList}
        data={todos}
        renderItem={({ item }) => (
          <Todo todo={item} onRemove={removeTodo} goToTodo={goToTodo} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todosList: {
    paddingBottom: 50,
  },
});
