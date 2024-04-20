import { View, StyleSheet, Button } from 'react-native';
import { useState } from 'react';
import Header from './Header.js';
import WeatherInfo from './WeatherInfo.js';
import LocationInput from './LocationInput';


const HomeScreen = ({ navigation }) => {
  const [weatherData, setWeatherData] = useState({
    cityName: 'Tampere',
    description: 'Clear sky',
    temperature: 0,
    windSpeed: 0,
    icon: '01d',
  });

    const handleLocationSubmit = async (location) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=95eec2ca4a80cefdf683c4e23051158b`);
      const weatherJson = await response.json();
      console.log(weatherJson);
      setWeatherData({
        cityName: weatherJson.name,
        description: weatherJson.weather[0].main,
        temperature: weatherJson.main.temp,
        windSpeed: weatherJson.wind.speed,
        icon: weatherJson.weather[0].icon,
      });
    } catch (err) {
      console.log('Error fetching weather data');
    }
  };
  
  const URL =
    'https://api.openweathermap.org/data/2.5/weather?q=tampere&units=metric&appid=95eec2ca4a80cefdf683c4e23051158b';
  const featchWeatherData = async () => {
    try {
      const response = await fetch(URL);
      const weatherJson = await response.json();
      console.log(weatherJson);
      setWeatherData({
        cityName: weatherJson.name,
        description: weatherJson.weather[0].main,
        temperature: weatherJson.main.temp,
        windSpeed: weatherJson.wind.speed,
        icon: weatherJson.weather[0].icon,
      });
    } catch (err) {
      console.log('Virehe säätietojen hakemisessa');
    }
  };

  return (
    <View style={styles.containerStyle}>
      <View style={styles.topViewStyles}>
        <Header cityName={weatherData.cityName}></Header>
      </View>
      <View style={styles.middleViewStyle}>
        <WeatherInfo
          weatherDescription={weatherData.description}
          temperature={weatherData.temperature}
          windSpeed={weatherData.windSpeed}
          icon={weatherData.icon}></WeatherInfo>
      </View>
      <View style={styles.bottomViewStyle}>
      <LocationInput onLocationSubmit={handleLocationSubmit} />
      </View>
      <Button onPress={featchWeatherData} title={'Hae säätiedot'}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'powderblue',
  },

  topViewStyles: {
    flex: 20,
    flexDirection: 'column',
  },
  titleViewStyle: { flex: 20 },

  middleViewStyle: {
    flex: 60,
  },

  bottomViewStyle: { flex: 15 },
});

export default App;
