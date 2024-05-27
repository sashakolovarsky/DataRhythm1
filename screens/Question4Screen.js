// screens/Question4Screen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

export default function Question4Screen({ navigation }) {
  const [moodRating, setMoodRating] = useState(5);

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>How is your mood now?</Text>
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>Bad</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={10}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          value={moodRating}
          onValueChange={setMoodRating}
        />
        <Text style={styles.sliderLabel}>Very Good</Text>
      </View>
      <Text style={styles.answerText}>{moodRating}</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('Question5')}
      />
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
  questionText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
  },
  sliderLabel: {
    fontSize: 18,
    color: 'white',
  },
  slider: {
    flex: 1,
  },
  answerText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
});
