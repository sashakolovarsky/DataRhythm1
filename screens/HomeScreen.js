// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const username = 'User'; // Replace with actual username

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Hello {username}</Text>
      <Button
        title="Start Answering"
        color = '#00B5B9'
        onPress={() => navigation.navigate('Question1')}
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
  welcomeText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
});
