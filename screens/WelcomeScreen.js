import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {useAuth0, Auth0Provider} from 'react-native-auth0';

const App = () => {
    return (
      <Auth0Provider domain={"dev-k84ve77a5zlmkfed.us.auth0.com"} clientId={"Fw8n9qfXsWBArhgxgtv6ByiIY274JmjH"}>
        {/* your application */}
      </Auth0Provider>
    );
  };

const logo = require('../assets/DataRhythmLogo.jpg');

const LoginButton = () => {
    const {authorize} = useAuth0();

    const onPress = async () => {
        try {
            await authorize();
        } catch (e) {
            console.log(e);
        }
    };
}

export default function WelcomeScreen() {
      navigation.navigate("Home");
    }


  return (
    <View style={styles.container}>
    <Image source={logo} style={styles.logo} resizeMode='contain' />
      <Text style={styles.welcomeText}>Welcome!</Text>
      <Button onPress={onPress} title="Log in" />
    </View>
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingTop: 20,
  },
  welcomeText: {
    fontSize: 40,
    color: "white",
    marginBottom: 20,
  },
  logo: {
    width: 350,
    marginBottom: 10,
  },
  buttonContainer: {
    backgroundColor: '#00B5B9',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  }
});

function toQueryString(params) {
  return '?' + Object.entries(params)
    .map(([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(value))
    .join('&');
}
