import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([]);

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

  const goToTodo = (id) => {
    setTodoId(id);
  };

  const backToMainScreen = () => {
    setTodoId(null);
  };

  const todoInfo = todos.filter((el) => el.id === todoId)[0];

  const content = !todoId ? (
    <MainScreen
      addTodo={addTodo}
      todos={todos}
      removeTodo={removeTodo}
      goToTodo={goToTodo}
    />
  ) : (
    <TodoScreen
      todo={todoInfo}
      backToMainScreen={backToMainScreen}
      removeTodo={removeTodo}
    />
  );

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
});
