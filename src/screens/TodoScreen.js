import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export const TodoScreen = ({ todo, backToMainScreen, removeTodo }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <Button title="Back" onPress={backToMainScreen} />
      <Button
        title="Delete"
        onPress={() => {
          removeTodo(todo.id);
          backToMainScreen();
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
