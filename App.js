import { StatusBar } from "expo-status-bar";
import React, { Component, setState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
export default class App extends Component {
  state = {
    value: 0,
    count: 0,
  };
  Add = () => {
    this.setState({ count: 1 });
  };
  Sub = () => {
    this.setState({ count: 2 });
  };
  Mux = () => {
    this.setState({ count: 3 });
  };
  Div = () => {
    this.setState({ count: 4 });
  };
  Getvalue = (passval) => {
    const { value, count } = this.state;

    //this.setState(({value:value+passval}));
    console.log("++++++++++++++", passval, count);
    if (count === 1) {
      console.log("+++++++INNN+++++", count);
      this.setState({ value: value + passval });
      console.log("+++++++INNN+++++", value);
    } else if (count === 2) {
      this.setState({ value: value - passval });
    } else if (count == 3) {
      this.setState({ value: value * passval });
    } else {
      this.setState({ value: value / passval });
    }z
  };
  render() {
    const { value, count } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{value}</Text>
        </View>
        {/* <View style={styles.calculation}>
          <Text style={styles.calculationText}></Text>
        </View> */}
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <Button title="0" onPress={() => this.Getvalue(0)}></Button>
              <Button title="1" onPress={() => this.Getvalue(1)}></Button>
              <Button title="2" onPress={() => this.Getvalue(2)}></Button>
            </View>
            <View style={styles.row}>
              <Button title="3" onPress={() => this.Getvalue(3)}></Button>
              <Button title="4" onPress={() => this.Getvalue(4)}></Button>
              <Button title="5" onPress={() => this.Getvalue(5)}></Button>
            </View>
            <View style={styles.row}>
              <Button title="6" onPress={() => this.Getvalue(6)}></Button>
              <Button title="7" onPress={() => this.Getvalue(7)}></Button>
              <Button title="8" onPress={() => this.Getvalue(8)}></Button>
            </View>
            <View style={styles.row}>
              <Button title="9" onPress={() => this.Getvalue(9)}></Button>
            </View>
          </View>
          <View style={styles.operations}>
            <Button title="+" onPress={this.Add} />
            <Button title="-" onPress={this.Sub} />
            <Button title="*" onPress={this.Mux} />
            <Button title="/" onPress={this.Div} />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  result: {
    flex: 1,
    marginTop: 25,
    backgroundColor: "red",
  },
  calculation: {
    flex: 1,

    backgroundColor: "green",
  },
  buttons: {
    flex: 5,
    flexDirection: "row",
  },
  numbers: {
    flex: 3,
    backgroundColor: "yellow",
  },
  operations: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "white",
  },
});
