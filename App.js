import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { AddTodo } from "./src/components/AddTodo";
import { Todo } from "./src/components/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);
  /* {
      id: 1,
      title: "test",
    },
    {
      id: 2,
      title: "test",
    },
    {
      id: 3,
      title: "test",
    },
    {
      id: 4,
      title: "test",
    },
    {
      id: 5,
      title: "test",
    },
    {
      id: 6,
      title: "test",
    },
    {
      id: 7,
      title: "test",
    },
    {
      id: 8,
      title: "test",
    },
    {
      id: 9,
      title: "test",
    },
    {
      id: 10,
      title: "test",
    },
    {
      id: 11,
      title: "test",
    },
    {
      id: 12,
      title: "test",
    },
    {
      id: 13,
      title: "test",
    }, */

  const addTodo = (title) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((el) => el.id !== id));
  };
  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList
          style={styles.todosList}
          data={todos}
          renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  todosList: {
    paddingBottom: 50,
  },
});
