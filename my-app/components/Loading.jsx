import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: "100vw",
    flex: 1,
    justifyContent: "center",

    alignItems: "center",
    zindex: 999,
    backgroundColor: "#00000083",
    position: "fixed",
    top: 0,
    left: 0,
  },
});

export default Loading;
