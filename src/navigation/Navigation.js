import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import Account from "../screens/Account";
import Pokedex from "../screens/Pokedex";
import Favorites from "../screens/Favorites";

const Tab = createBottomTabNavigator();

function renderPokeBall() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 50, height: 50, top: -15 }}
    />
  );
}

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
          headerTitleAlign: "center",
          title: "",
          headerTransparent: true,
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={Pokedex}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => renderPokeBall(),
          headerTitleAlign: "center",
          title: "",
          headerTransparent: true,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
          headerTitleAlign: "center",
          title: "",
          headerTransparent: true,
        }}
      />
    </Tab.Navigator>
  );
}
