// screens/Question5Screen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function Question5Screen({ navigation }) {
  const [firstMeal, setFirstMeal] = useState('');
  const [lastMeal, setLastMeal] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>When was your first and your last meal yesterday?</Text>
      <TextInput
        style={styles.input}
        placeholder="First meal"
        placeholderTextColor="#999"
        value={firstMeal}
        onChangeText={setFirstMeal}
      />
      <TextInput
        style={styles.input}
        placeholder="Last meal"
        placeholderTextColor="#999"
        value={lastMeal}
        onChangeText={setLastMeal}
      />
      <Button
        title="Finish"
        onPress={() => navigation.navigate('ThankYou')}
        disabled={!firstMeal || !lastMeal}
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
  input: {
    width: '80%',
    height: 50,
    paddingHorizontal: 10,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    color: 'white',
    marginBottom: 20,
  },
});
