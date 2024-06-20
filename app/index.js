import React, { Component } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function StartPage() {
  return (
    <View className="flex-1 justify-center">
      <ActivityIndicator size="large" color="gray" />
    </View>
  );
}
