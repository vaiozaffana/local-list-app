import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/earth.png")}
        style={styles.image}
      />
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.text}>
        Aplikasi ini menampilkan daftar item lokal menggunakan React Native
        Expo. Aplikasi ini dirancang untuk penggunaan offline dengan fitur
        seperti penyaringan dan tampilan detail item.
      </Text>
      <Text style={styles.text}>Version: 1.0.0</Text>
      <Text style={styles.text}>Developer: Vaio</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginTop: 8,
    textAlign: "center",
  },
  image: {
    margin: 10,
    borderRadius: 100,
    width: 100,
    height: 100,
  },
});

export default ProfileScreen;
