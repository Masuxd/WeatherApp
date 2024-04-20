import { View, Image, Text, StyleSheet } from 'react-native';

const WeatherInfo = ({ weatherDescription, temperature, windSpeed, icon }) => {
  return (
    <View style={styles.weatherStyle}>
      <View style={styles.weatherContainerStyle}>
        <Text style={styles.textStyle}>{temperature.toFixed(1) + ' °C'}</Text>
        <Text style={styles.textStyle}>{weatherDescription}</Text>
        <Text style={styles.textStyle}>{windSpeed + ' m/s'}</Text>
      </View>
      <View style={styles.conteinerStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: 'https://openweathermap.org/img/wn/' + icon + '@2x.png',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
  },
  weatherStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  weatherContainerStyle: {
    flex: 2,
    flexDirection: 'column',
  },
  conteinerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default WeatherInfo;
