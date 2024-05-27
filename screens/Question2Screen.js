import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function Question2Screen({ navigation }) {
  const [answer, setAnswer] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>When did you wake up?</Text>
      <TextInput
        style={styles.input}
        placeholder="Your answer"
        placeholderTextColor="#999"
        value={answer}
        onChangeText={setAnswer}
      />
      <Button
        title="Next"
        onPress={() => navigation.navigate('Question3')}
        disabled={!answer}
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
