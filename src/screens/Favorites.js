import { SafeAreaView, Text, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useEffect, useCallback } from "react";
import { getPokemonsFavoriteApi } from "../api/favorite";
import useAuth from "../hooks/useAuth";
import { getPokemonDetailsApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";
import NoLogged from "../components/NoLogged";

export default function Favorite() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonsFavoriteApi();
          const pokemonsArray = [];

          for await (const id of response) {
            const pokemonDetail = await getPokemonDetailsApi(id);

            // Verificar si hay tipos y si el arreglo no está vacío
            const type =
              pokemonDetail.types.length > 0
                ? pokemonDetail.types[0].type.name
                : "unknown";

            pokemonsArray.push({
              id: pokemonDetail.id,
              name: pokemonDetail.name,
              type: type,
              order: pokemonDetail.order,
              image:
                pokemonDetail.sprites.other["official-artwork"].front_default,
            });
          }

          setPokemons(pokemonsArray);
        })();
      }
    }, [auth])
  );

  return !auth ? <NoLogged /> : <PokemonList pokemons={pokemons} />;
}
