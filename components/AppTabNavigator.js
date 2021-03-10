import * as React from "react";
import { Image } from "react-native";
import { Icon } from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
import LibraryScreen from "../screens/LibraryScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";

export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: (<Icon name="disc-outline" type="ionicon" />),
      tabBarLabel: "Home",
    },
  },
  LibraryBook: {
    screen: LibraryScreen,
    navigationOptions: {
      tabBarIcon: (<Icon name="library-outline" type="ionicon" />),
      tabBarLabel: "Library",
    },
  },
});
