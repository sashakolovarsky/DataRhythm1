// screens/Question4Screen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Slider from '@react-native-community/slider';

const logo = require('../assets/DataRhythmLogo.jpg');

export default function Question4Screen({ navigation }) {
  const [moodRating, setMoodRating] = useState(3);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode='contain' />
      <Text style={styles.questionText}>How is your mood now?</Text>
      <Slider
      style={styles.slider}
      minimumValue={1}
      maximumValue={5}
      step={1}
      minimumTrackTintColor="#FFFFFF"
      maximumTrackTintColor="#000000"
      value={moodRating}
      onValueChange={setMoodRating}
      />
        <View style={styles.scaleContainer}>
        <View style={styles.labelContainer}>
          <Text style={[styles.scaleLabel, styles.numberLabel]}>1</Text>
          <Text style={styles.scaleLabel}>Bad</Text>
        </View>
        {[2, 3, 4].map((value) => (
        <Text key={value} style={styles.scaleLabel}>{value}</Text>
        ))}
        <View style={styles.labelContainer}>
          <Text style={[styles.scaleLabel, styles.numberLabel]}>5</Text>
          <Text style={styles.scaleLabel}>Great</Text>
        </View>
      </View>
      <View style={[styles.buttonContainer, { marginBottom: 50 }]}>
        <Button
          title="Next"
          onPress={() => navigation.navigate('Question5')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    backgroundColor: 'black',
    paddingTop: 20, 
  },
  logo: {
    width: 350,
    marginBottom: 10, 
  },
  questionText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20, 
    textAlign: 'center',
  },
  slider: {
    width: 300,
    height: 40,
    marginBottom: 10,
  },
  scaleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '80%',
    marginBottom: 20,
  },
  scaleLabel: {
    fontSize: 16,
    color: 'white',
  },
  labelContainer: {
    alignItems: 'center',
  },
  numberLabel: {
    marginBottom: 5,
  },
  buttonContainer: {
    width: '80%',
  },
});
