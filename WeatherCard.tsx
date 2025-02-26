
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type WeatherCardProps = {
  date: string;
  maxTemp: number;
  minTemp: number;
  rainProbability: number;
  condition: string;
  icon: string;
};

const WeatherCard = ({
  date,
  maxTemp,
  minTemp,
  rainProbability,
  condition,
  icon,
}: WeatherCardProps) => {
  const getBackgroundColor = (temp: number) => {
    if (temp < 20) return "#4C9EEB";  // Azul frío
    if (temp >= 21 && temp <= 30) return "#FFCC00";  // Amarillo
    return "#FF5733";  // Naranja cálido
  };

  const formatDate = (dateString: string) => {
    const dateObj = new Date(dateString);
    const day = dateObj.toLocaleDateString("es-ES", { weekday: "long" });
    const formattedDate = `${dateObj.getDate().toString().padStart(2, "0")}/${(
      dateObj.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${dateObj.getFullYear()}`;
    return { day, formattedDate };
  };

  const { day, formattedDate } = formatDate(date);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: getBackgroundColor(maxTemp) },
      ]}
    >
      <Text style={styles.dayText}>{day}</Text>
      <Text style={styles.dateText}>{formattedDate}</Text>
      <Image
        source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` }}
        style={styles.icon}
      />
      <Text style={styles.tempText}>Max: {Math.round(maxTemp)}°C</Text>
      <Text style={styles.tempText}>Min: {Math.round(minTemp)}°C</Text>
      <Text style={styles.rainText}>
        Lluvia: {Math.round(rainProbability)}%
      </Text>
      <Text style={styles.conditionText}>{condition}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderRadius: 12,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4, 
  },
  dayText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 6,
  },
  dateText: {
    fontSize: 16,
    color: "#FFFFFF", 
    marginBottom: 8,
  },
  icon: {
    width: 80,
    height: 80,
    marginVertical: 15,
  },
  tempText: {
    fontSize: 18,
    color: "#FFFFFF", 
    marginVertical: 3,
  },
  rainText: {
    fontSize: 16,
    color: "#FFFFFF", 
  },
  conditionText: {
    fontSize: 16,
    color: "#FFFFFF", 
    marginTop: 6,
    textTransform: "capitalize",
  },
});

export default WeatherCard;
