import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

const _color = "#6E01EF";
const _size = 100;

const WavyThingy = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={[styles.dot, styles.center]}>
        {/* {[...Array(3).keys()].map} */}
        <Feather name="phone-outgoing" size={32} color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: _color,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WavyThingy;
