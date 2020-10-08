import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Made with React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerText: {
    color: "white",
  },
  footer: {
    height: 80,
    backgroundColor: "steelblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
