// screens/Question3Screen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

export default function Question3Screen({ navigation }) {
  const [sleepRating, setSleepRating] = useState(5);

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>How good was your sleep?</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={10}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        value={sleepRating}
        onValueChange={setSleepRating}
      />
      <View style={styles.scaleContainer}>
        {[...Array(11).keys()].map((value) => (
          <Text key={value} style={styles.scaleLabel}>{value}</Text>
        ))}
      </View>
      <Button
        title="Next"
        onPress={() => navigation.navigate('Question4')}
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
  slider: {
    width: 300,
    height: 40,
    marginBottom: 10,
  },
  scaleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
  },
  scaleLabel: {
    fontSize: 16,
    color: 'white',
  },
});
