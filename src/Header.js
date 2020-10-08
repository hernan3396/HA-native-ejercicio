import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        Welcome to your first React Native app
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    fontSize: 15,
  },
});
