import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Alert,
  TextInput,
  FlatList,
} from "react-native";
import ButtonLink from "./ButtonLink";
import Axios from "axios";

export default function Main() {
  const [name, setName] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async () => {
    const response = await Axios.get(
      `http://www.omdbapi.com/?s=${name}&apikey=93064b0b`
    );

    setMovies(response.data.Search);
  };
  return (
    <View style={styles.main}>
      <View style={styles.search}>
        <TextInput
          placeholder="Enter a movie name"
          style={styles.textInput}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <ButtonLink title="Search" onPress={handleSearch} />
      </View>
      <View style={styles.content}>
        <FlatList
          data={movies}
          renderItem={({ item }) => <Text>{item.Title}</Text>}
          keyExtractor={(item) => item.imdbID}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  textInput: {
    height: 40,
    width: 200,
    borderRadius: 20,
    borderWidth: 2,
    paddingHorizontal: 20,
  },
  search: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  content: {
    flex: 1,
    height: 400,
  },
});
