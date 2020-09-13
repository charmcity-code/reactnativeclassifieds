import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text } from "react-native";
import Login from "./components/Login";

export default function App() {
  const doLogin = (email, password) => {
    console.log(email, password);
  };

  return (
    <>
      <SafeAreaView>
        <Login doLogin={doLogin} />
      </SafeAreaView>
    </>
  );
}
