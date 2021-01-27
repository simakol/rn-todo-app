import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value.trim());
      setValue("");
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
      <Button title="Add" onPress={pressHandler} />
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
});
