import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Login from "./components/Login";

export default function App() {
  const [token, setToken] = useState("");

  const storeData = async value => {
    try {
      await AsyncStorage.setItem("@jwt", value);
    } catch (e) {
      Alert.alert("Error while storing data!");
    }
  };

  const doLogin = (email, password) => {
    fetch("http://localhost:3010/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          setToken(json.token);
          storeData(json.token);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <SafeAreaView>
        <Login doLogin={doLogin} />
      </SafeAreaView>
    </>
  );
}
