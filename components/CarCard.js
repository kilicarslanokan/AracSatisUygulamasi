import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const CarCard = ({ car, onSelect }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: car.img }} style={styles.image} />
      <Text style={styles.model}>{car.model}</Text>
      <TouchableOpacity
        style={styles.selectButton}
        onPress={() => onSelect(car)}
      >
        <Text style={styles.buttonText}>Seç</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1a1a1a",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 5,
    marginBottom: 10,
  },
  model: {
    color: "#FFD700",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  selectButton: {
    backgroundColor: "#FFD700",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default CarCard;
