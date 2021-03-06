import React from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";
import { AppCard } from "../ui/AppCard";
import { BUTTON_THEME } from "../theme";

export const TodoScreen = ({ todo, backToMainScreen, removeTodo }) => {
  const deleteTodo = (todo) => {
    removeTodo(todo.id);
    backToMainScreen();
  };
  return (
    <View>
      <AppCard style={styles.card}>
        <Text style={styles.text}>{todo.title}</Text>
        <Button title="Edit" />
      </AppCard>
      <View style={styles.buttonsBlock}>
        <View style={styles.button}>
          <Button title="Back" onPress={backToMainScreen} />
        </View>
        <View style={styles.button}>
          <Button
            title="Delete"
            color={BUTTON_THEME.DNAGER_COLOR}
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
    fontSize: 20,
  },
  buttonsBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
    borderWidth: 2,
    borderColor: BUTTON_THEME.BUTTONS_BORDER_COLOR,
    borderRadius: 5,
  },
  card: {
    marginBottom: 25,
  },
});
