import * as React from "react";
import { Header, Icon, Badge } from "react-native-elements";
import { Text, View } from "react-native";

export default class MyHeader extends React.Component {
  render() {
    return (
      <Header
        backgroundColor={"#1D97F7"}
        leftComponent={
          <Icon
            name="bars"
            type="font-awesome"
            color="#fff"
            onPress={() => {
              this.props.navigation.toggleDrawer();
            }}
          />
        }
        centerComponent={{
          text: this.props.title,
          style: { color: "white", fontSize: 25, fontWeight: "bold" },
        }}
      />
    );
  }
}
