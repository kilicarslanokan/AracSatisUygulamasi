import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { signOut } from "firebase/auth";

import { auth } from "../config";

export const HomeScreen = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Çıkış işlemi başarılı.");
    } catch (error) {
      console.error("Çıkış işleminde hata oluştu: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.adsContainer}>
        <View style={styles.adContainer}>
          <Image
            source={require("../assets/car1.jpg")}
            style={styles.adImage}
          />
          <View style={styles.adInfoContainer}>
            <Text style={styles.adInfo}>Araba Modeli: M550i</Text>
            <Text style={styles.adInfo}>Motor Gücü: 600</Text>
            <Text style={styles.adInfo}>0-100 Hızlanma: 3.3</Text>
          </View>
        </View>

        <View style={styles.adContainer}>
          <Image
            source={require("../assets/car2.jpg")}
            style={styles.adImage}
          />
          <View style={styles.adInfoContainer}>
            <Text style={styles.adInfo}>Araba Modeli: 420d</Text>
            <Text style={styles.adInfo}>Motor Gücü: 190</Text>
            <Text style={styles.adInfo}>0-100 Hızlanma: 7.5</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.signOutButton} onPress={handleLogout}>
          <Text style={styles.signOutText}>Çıkış Yap</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0E07",
  },
  adsContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  adContainer: {
    marginBottom: 20,
    borderWidth: 5,
    borderColor: "gold",
    borderRadius: 20,
    padding: 10,
  },
  adImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  adInfoContainer: {
    paddingHorizontal: 10,
  },
  adInfo: {
    fontSize: 16,
    marginBottom: 5,
    color: "white",
  },
  signOutButton: {
    alignSelf: "center",
    backgroundColor: "gold",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 5,
  },
  signOutText: {
    color: "black",
    fontSize: 16,
  },
});
