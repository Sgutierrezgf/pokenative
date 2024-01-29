import { FlatList, Text, StyleSheet } from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});

export default function PokemonList(props) {
  const { pokemons } = props;
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    ></FlatList>
  );
}
