import React, { useState, useEffect, useRef } from "react";
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

export const HomeScreen = ({ navigation }) => {
  const cars = usebmw_arabalarListener();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCars, setCurrentCars] = useState([]);
  const itemsPerPage = 10;
  const scrollViewRef = useRef(null);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentCars(cars.slice(startIndex, endIndex));
  }, [currentPage, cars]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Çıkış işlemi başarılı.");
      navigation.navigate("Login"); // Başarılı çıkış sonrası "Login" ekranına yönlendirin
    } catch (error) {
      console.error("Çıkış işleminde hata oluştu: ", error);
    }
  };

  const handlePagePress = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  const navigateToDetails = (car) => {
    navigation.navigate("DetailsScreen", { car });
  };

  // Sayfa numaralarını oluşturma
  const totalPages = Math.ceil(cars.length / itemsPerPage);
  const visiblePages = [];
  const startPage = Math.max(currentPage - 1, 1);
  const endPage = Math.min(currentPage + 1, totalPages);

  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i);
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.adsContainer}
        ref={scrollViewRef}
      >
        {currentCars.map((car, index) => (
          <TouchableOpacity key={index} onPress={() => navigateToDetails(car)}>
            <View style={styles.adContainer} key={index}>
              <Image source={{ uri: car.img }} style={styles.adImage} />
              <View style={styles.adInfoContainer}>
                <Text style={styles.adInfo}>Araba Modeli: {car.model}</Text>
                <Text style={styles.adInfo}>Motor Gücü: {car.guc}</Text>
                <Text style={styles.adInfo}>Motor Tipi: {car.motor_tipi}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
        <View style={styles.paginationContainer}>
          {startPage > 1 && (
            <TouchableOpacity
              style={styles.paginationButton}
              onPress={() => handlePagePress(startPage - 1)}
            >
              <Text style={styles.paginationText}>{startPage - 1}</Text>
            </TouchableOpacity>
          )}
          {visiblePages.map((pageNumber) => (
            <TouchableOpacity
              key={pageNumber}
              style={[
                styles.paginationButton,
                currentPage === pageNumber && styles.activePaginationButton,
              ]}
              onPress={() => handlePagePress(pageNumber)}
            >
              <Text
                style={[
                  styles.paginationText,
                  currentPage === pageNumber && styles.activePaginationText,
                ]}
              >
                {pageNumber}
              </Text>
            </TouchableOpacity>
          ))}
          {endPage < totalPages && (
            <TouchableOpacity
              style={styles.paginationButton}
              onPress={() => handlePagePress(endPage + 1)}
            >
              <Text style={styles.paginationText}>{endPage + 1}</Text>
            </TouchableOpacity>
          )}
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
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  paginationButton: {
    backgroundColor: "gold",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  activePaginationButton: {
    backgroundColor: "orange", // Change to your preferred color
  },
  paginationText: {
    color: "black",
    fontSize: 16,
  },
  activePaginationText: {
    color: "white", // Change to your preferred color
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

export default HomeScreen;
