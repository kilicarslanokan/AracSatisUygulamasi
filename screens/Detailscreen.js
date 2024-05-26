import React from "react";
import { View, StyleSheet, ScrollView, Image, Text } from "react-native";

const DetailsScreen = ({ route }) => {
  const { car } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: car.img }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Model:</Text>
          <Text style={styles.detailValue}>{car.model}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Model Yılı:</Text>
          <Text style={styles.detailValue}>{car.model_yili}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Motor Hacmi:</Text>
          <Text style={styles.detailValue}>{car.motor_hacmi}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Motor Tipi:</Text>
          <Text style={styles.detailValue}>{car.motor_tipi}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Şanzıman:</Text>
          <Text style={styles.detailValue}>{car.sanziman}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Sınıf:</Text>
          <Text style={styles.detailValue}>{car.sinif}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Güç:</Text>
          <Text style={styles.detailValue}>{car.guc}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Tork:</Text>
          <Text style={styles.detailValue}>{car.tork}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Yakıt Tüketimi:</Text>
          <Text style={styles.detailValue}>{car.yakit_tuketim}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Uzunluk:</Text>
          <Text style={styles.detailValue}>{car.uzunluk}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Ağırlık:</Text>
          <Text style={styles.detailValue}>{car.agirlik}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Genişlik:</Text>
          <Text style={styles.detailValue}>{car.genislik}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Yükseklik:</Text>
          <Text style={styles.detailValue}>{car.yukseklik}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Süspansiyon Sistemi:</Text>
          <Text style={styles.detailValue}>{car.supspansiyon_sistemi}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Jant Boyutu:</Text>
          <Text style={styles.detailValue}>{car.jant_boyutu}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Dingil Mesafesi:</Text>
          <Text style={styles.detailValue}>{car.dingil_mesafesi}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Emisyon:</Text>
          <Text style={styles.detailValue}>{car.emisyon}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Fren Sistemi:</Text>
          <Text style={styles.detailValue}>{car.fren_sistemi}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Lastik Boyutu:</Text>
          <Text style={styles.detailValue}>{car.lastik_boyutu}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Direksiyon Sistemi:</Text>
          <Text style={styles.detailValue}>{car.direksiyon_sistemi}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#0D0E07",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: "cover", // Resmin çerçeveye sığması için eklendi
  },
  detailsContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#1E1F20",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFD700",
  },
  detailValue: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});

export default DetailsScreen;
