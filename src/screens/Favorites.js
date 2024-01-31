import { SafeAreaView, Text, Button } from "react-native";
import React from "react";
import { getPokemonsFavoriteApi } from "../api/favorite";

export default function Favorite() {
  const checkFavorites = async () => {
    const response = await getPokemonsFavoriteApi();
    console.log(response);
  };

  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      <Button title="Obtener favoritos" onPress={checkFavorites} />
    </SafeAreaView>
  );
}
