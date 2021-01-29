import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Keyboard,
} from "react-native";
import { BUTTON_THEME } from "../theme";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value.trim());
      setValue("");
      Keyboard.dismiss();
    } else {
      Alert.alert("Todo mustn't be empty!");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        placeholder="Add task..."
        onChangeText={setValue}
        value={value}
        autoCorrect={false}
        autoCapitalize="sentences"
      />
      <View style={styles.addBtn}>
        <Button title="Add" onPress={pressHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "70%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3948ab",
  },
  addBtn: {
    borderWidth: 2,
    borderColor: BUTTON_THEME.BUTTONS_BORDER_COLOR,
    borderRadius: 5,
    width: "25%",
  },
});
