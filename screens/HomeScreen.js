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

import { auth, usebmw_arabalarListener } from "../config/firebase";

export const HomeScreen = () => {
  const cars = usebmw_arabalarListener();

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
        {cars.map((car, index) => (
          <View style={styles.adContainer} key={index}>
            <Image source={{ uri: car.img }} style={styles.adImage} />
            <View style={styles.adInfoContainer}>
              <Text style={styles.adInfo}>Araba Modeli: {car.model}</Text>
              <Text style={styles.adInfo}>Motor Gücü: {car.guc}</Text>
              <Text style={styles.adInfo}>Motor Tipi: {car.motor_tipi}</Text>
            </View>
          </View>
        ))}
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
