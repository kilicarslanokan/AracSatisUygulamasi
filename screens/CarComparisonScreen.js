import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const CarComparisonScreen = ({ route }) => {
  const { car1, car2 } = route.params;

  const renderCarDetails = (car) => (
    <View style={styles.carContainer}>
      <Text style={styles.carName}>{car.model}</Text>
      <Image source={{ uri: car.img }} style={styles.carImage} />
      <Text style={styles.sectionTitle}>Teknik Özellikler</Text>
      <Text style={styles.carDetails}>Model Yılı: {car.model_yili}</Text>
      <Text style={styles.carDetails}>Motor Hacmi: {car.motor_hacmi}</Text>
      <Text style={styles.carDetails}>Motor Tipi: {car.motor_tipi}</Text>
      <Text style={styles.carDetails}>Şanzıman: {car.sanziman}</Text>
      <Text style={styles.carDetails}>Sınıf: {car.sinif}</Text>
      <Text style={styles.carDetails}>Güç: {car.guc}</Text>
      <Text style={styles.carDetails}>Tork: {car.tork}</Text>
      <Text style={styles.carDetails}>
        Yakıt Tüketimi: {car.yakit_tuketim.join(", ")}
      </Text>
      <Text style={styles.carDetails}>Uzunluk: {car.uzunluk}</Text>
      <Text style={styles.carDetails}>Ağırlık: {car.agirlik}</Text>
      <Text style={styles.carDetails}>Genişlik: {car.genislik}</Text>
      <Text style={styles.carDetails}>Yükseklik: {car.yukseklik}</Text>
      <Text style={styles.carDetails}>
        Süspansiyon Sistemi: {car.supspansiyon_sistemi}
      </Text>
      <Text style={styles.carDetails}>Jant Boyutu: {car.jant_boyutu}</Text>
      <Text style={styles.carDetails}>
        Dingil Mesafesi: {car.dingil_mesafesi}
      </Text>
      <Text style={styles.carDetails}>Emisyon: {car.emisyon}</Text>
      <Text style={styles.carDetails}>Fren Sistemi: {car.fren_sistemi}</Text>
      <Text style={styles.carDetails}>Lastik Boyutu: {car.lastik_boyutu}</Text>
      <Text style={styles.carDetails}>
        Direksiyon Sistemi: {car.direksiyon_sistemi}
      </Text>
      <Text style={styles.sectionTitle}>Konfor Özellikleri</Text>
      {car.konfor_ozellikleri.map((item, index) => (
        <Text key={index} style={styles.carDetails}>
          - {item}
        </Text>
      ))}
      <Text style={styles.sectionTitle}>Teknoloji Özellikleri</Text>
      {car.teknoloji_ozellikleri.map((item, index) => (
        <Text key={index} style={styles.carDetails}>
          - {item}
        </Text>
      ))}
      <Text style={styles.sectionTitle}>Güvenlik Özellikleri</Text>
      {car.guvenlik_ozellikleri.map((item, index) => (
        <Text key={index} style={styles.carDetails}>
          - {item}
        </Text>
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.comparisonContainer}>
        {renderCarDetails(car1)}
        {renderCarDetails(car2)}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 10,
  },
  comparisonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  carContainer: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  carName: {
    color: "#FFD700",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  carImage: {
    width: "100%",
    height: 150,
    marginBottom: 10,
  },
  sectionTitle: {
    color: "#FFD700",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    textAlign: "center",
  },
  carDetails: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
  },
});

export default CarComparisonScreen;
