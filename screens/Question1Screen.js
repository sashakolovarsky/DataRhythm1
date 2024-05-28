// screens/Question1Screen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Updated import

// const logo = require("C:/Users/w10/QuestionnaireApp/assets/DataRhythmLogo.jpg"); // Import logo

export default function Question1Screen({ navigation }) {
  const [selectedHour, setSelectedHour] = useState('00');
  const [selectedMinute, setSelectedMinute] = useState('00');

  const handleNext = () => {
    const selectedTime = `${selectedHour}:${selectedMinute}`;
    // You can use selectedTime for further processing or validation

    // Proceed to the next question
    navigation.navigate('Question2');
  };

  return (
    <View style={styles.container}>
    {/* <Image source={logo} style={styles.logo} resizeMode='contain' /> */}
    <Text style={styles.questionText}>When did you go to sleep?</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedHour}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedHour(itemValue)}
          dropdownIconColor="white" // Ensures the dropdown icon color matches the text color
        >
          {[...Array(24).keys()].map((hour) => (
            <Picker.Item key={hour} label={`${hour}`.padStart(2, '0')} value={`${hour}`.padStart(2, '0')} />
          ))}
        </Picker>
        <Picker
          selectedValue={selectedMinute}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedMinute(itemValue)}
          dropdownIconColor="white" // Ensures the dropdown icon color matches the text color
        >
          {[...Array(60).keys()].map((minute) => (
            <Picker.Item key={minute} label={`${minute}`.padStart(2, '0')} value={`${minute}`.padStart(2, '0')} />
          ))}
        </Picker>
      </View>
      <Button title="Next" onPress={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    logo: {
      height: 380,
      width: 370,
      marginBottom: 200,
    },
    questionText: {
      fontSize: 24,
      color: 'white',
      marginBottom: 20,
      textAlign: 'center',
    },
    pickerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    picker: {
      width: 100,
      height: 200,
      color: 'white',
      backgroundColor: '#00B5B9',
    },
  });
