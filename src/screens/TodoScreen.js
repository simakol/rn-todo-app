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
      <View style={styles.buttonsBlock}>
        <View style={styles.button}>
          <Button title="Back" onPress={backToMainScreen} />
        </View>
        <View style={styles.button}>
          <Button
            title="Delete"
            color="#e53935"
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
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    marginBottom: 50,
    fontSize: 20,
  },
  buttonsBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 5,
  },
});
