import * as React from "react";
import { View, Text, StyleSheet} from "react-native";
import MyHeader from "../components/MyHeader";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader title={"MusicZone"} navigation={this.props.navigation} />
      </View>
    );
  }
}
