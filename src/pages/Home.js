import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import { connect } from "react-redux";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>Minha Adega Home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  }
})

export default Home;