import React, { Component } from "react";
import { View, Button } from "react-native";

export default class CalendarScreen extends Component {
  static navigationOptions = {
    title: "calendar",
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "palevioletred",
        }}
      >
        <Button
          title="Skrrrah"
          onPress={() => {
            this.props.screenProps.navigation.navigate("Info");
          }}
        />
      </View>
    );
  }
}