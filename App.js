import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "./src/Header";
import Main from "./src/Main";
import Footer from "./src/Footer";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Main />

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
