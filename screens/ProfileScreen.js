import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { auth } from "../config/firebase"; // Firebase yapılandırmanızı buradan alın
import { signOut } from "firebase/auth";
import { MaterialIcons } from "@expo/vector-icons";

const ProfileScreen = ({ navigation }) => {
  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Çıkış işlemi başarılı.");
      navigation.navigate("Login"); // Başarılı çıkış sonrası "Login" ekranına yönlendirin
    } catch (error) {
      console.error("Çıkış işleminde hata oluştu: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialIcons name="person" size={100} color="gold" />
      </View>
      <Text style={styles.title}>Profilim</Text>
      {user && (
        <>
          <Text style={styles.info}>
            Kullanıcı Adı: {user.displayName} Okan Kılıçarslan
          </Text>
          <Text style={styles.info}>E-posta: {user.email}</Text>
        </>
      )}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0D0E07",
  },
  iconContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "gold",
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
    color: "white",
  },
  logoutButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "gold",
    borderRadius: 10,
  },
  logoutButtonText: {
    fontSize: 16,
    color: "black",
  },
});

export default ProfileScreen;
