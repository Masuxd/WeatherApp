import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LocationInput = ({ onLocationSubmit }) => {
  const [location, setLocation] = useState('');

  const handleLocationChange = (text) => {
    setLocation(text);
  };

  const handleSubmit = () => {
    onLocationSubmit(location);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your location"
        value={location}
        onChangeText={handleLocationChange}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});

export default LocationInput;