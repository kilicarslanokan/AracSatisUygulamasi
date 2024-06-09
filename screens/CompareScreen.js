import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { usebmw_arabalarListener } from "../config/firebase";
import CarCard from "../components/CarCard";

const CompareScreen = ({ navigation }) => {
  const bmw_arabalar = usebmw_arabalarListener();
  const [search, setSearch] = useState("");
  const [selectedCars, setSelectedCars] = useState([]);

  const handleSearch = (text) => {
    setSearch(text);
  };

  const handleSelectCar = (car) => {
    if (selectedCars.length < 2) {
      setSelectedCars([...selectedCars, car]);
    } else {
      setSelectedCars([selectedCars[1], car]);
    }
  };

  const handleRemoveCar = (car) => {
    setSelectedCars(
      selectedCars.filter((selectedCar) => selectedCar.id !== car.id)
    );
  };

  const filteredCars = bmw_arabalar.filter((car) =>
    car.model.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Araba modelini ara..."
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredCars}
        renderItem={({ item }) => (
          <CarCard car={item} onSelect={handleSelectCar} />
        )}
        keyExtractor={(item) => item.id}
      />
      {selectedCars.length === 2 && (
        <TouchableOpacity
          style={styles.compareButton}
          onPress={() =>
            navigation.navigate("CarComparisonScreen", {
              car1: selectedCars[0],
              car2: selectedCars[1],
            })
          }
        >
          <Text style={styles.compareButtonText}>Karşılaştır</Text>
        </TouchableOpacity>
      )}
      <View style={styles.selectedCarsContainer}>
        {selectedCars.map((car) => (
          <View key={car.id} style={styles.carContainer}>
            <Text style={styles.carName}>{car.model}</Text>
            <Image source={{ uri: car.img }} style={styles.carImage} />
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => handleRemoveCar(car)}
            >
              <Text style={styles.removeButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 10,
  },
  searchBar: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  compareButton: {
    backgroundColor: "#FFD700",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  compareButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedCarsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  carContainer: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    padding: 10,
    borderRadius: 5,
    margin: 5,
    position: "relative",
  },
  carName: {
    color: "#FFD700",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  carImage: {
    width: "100%",
    height: 150,
    marginBottom: 10,
  },
  removeButton: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "#FF0000",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  removeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CompareScreen;
