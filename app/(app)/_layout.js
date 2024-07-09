import { Stack } from "expo-router";
import React, { Component } from "react";
import { Text, View } from "react-native";
import HomeHeader from "../../components/HomeHeader";

export default function _Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{
          header: () => <HomeHeader />,
          headerBackground: null,
        }}
      />
    </Stack>
  );
}
