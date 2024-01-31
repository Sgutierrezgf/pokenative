import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/FontAwesome5";
import Pokedex from "../screens/Pokedex";
import Favorites from "../screens/Favorites";
import Account from "../screens/Account";
import { Image } from "react-native";
import Pokemon from "../screens/Pokemon";

export default function Navigation() {
  const Tab = createBottomTabNavigator();
  const PokemonStack = createNativeStackNavigator();

  const StackPokemon = () => {
    return (
      <PokemonStack.Navigator>
        <PokemonStack.Screen
          name="Pokedex"
          component={Pokedex}
          options={{ title: "Pokemones", headerTransparent: false }}
        />
        <PokemonStack.Screen
          name="Pokemon"
          component={Pokemon}
          options={{
            title: "",
            headerTransparent: true,
            headerShadowVisible: false,
          }}
        />
      </PokemonStack.Navigator>
    );
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favoritos",
          headerTitle: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="StackPokemon"
        component={StackPokemon}
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: () => renderImage(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Mi cuenta",
          headerTitle: "Mi cuenta",

          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderImage() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 65, height: 65, top: -15 }}
    />
  );
}
