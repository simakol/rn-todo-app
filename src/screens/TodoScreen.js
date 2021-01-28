import React from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";

export const TodoScreen = ({ todo, backToMainScreen, removeTodo }) => {
  const deleteTodo = (todo) => {
    removeTodo(todo.id);
    backToMainScreen();
  };
  return (
    <View>
      <Text style={styles.text}>{todo.title}</Text>
      <Button title="Back" onPress={backToMainScreen} />
      <Button
        title="Delete"
        color="red"
        onPress={() => {
          Alert.alert(
            "Are you sure?",
            "If you delete the task you will never see it again.",
            [
              {
                text: "Never ask me again",
                onPress: () => console.log("never"),
              },
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ]
          );
          deleteTodo(todo);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    marginBottom: 50,
    fontSize: 20,
  },
});
