// screens/HomeScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useAuth0 } from "@auth0/auth0-react";

export default function HomeScreen({ navigation }) {
  const username = "User"; // Replace with actual username

  return (
    <View style={styles.container}>
      <LoginButton />
      <LogoutButton />
      <Profile />
      <Text style={styles.welcomeText}>Hello {username}</Text>
      <Button
        title="Start Answering"
        color="#00B5B9"
        onPress={() => navigation.navigate("Question1")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  welcomeText: {
    fontSize: 24,
    color: "white",
    marginBottom: 20,
  },
});

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const fetchData = async () => {
    try {
      const token = await getAccessTokenSilently();

      console.log("Access Token:", token); // Log the token
    } catch (error) {
      console.error("Error fetching protected data:", error);
    }
  };

  if (isAuthenticated) {
    try {
      fetchData();
    } catch (error) {
      console.error("Error fetching protected data:", error);
    }
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};
