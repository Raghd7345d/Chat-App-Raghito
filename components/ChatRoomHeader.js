import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Stack } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
export default function ChatRoomHeader({ user, router }) {
  return (
    <Stack.Screen
      options={{
        title: "",
        headerShadowVisible: false,
        headerLeft: () => (
          <View className="flex-row items-center">
            <TouchableOpacity className="mr-2" onPress={() => router.back()}>
              <Entypo name="chevron-left" size={hp(4)} color="gray" />
            </TouchableOpacity>
            <View className="flex-row items-center gap-2">
              <Image
                // source="https://picsum.photos/seed/696/3000/2000"
                source={user?.profileUrl}
                style={{ height: hp(4.5), aspectRatio: 1, borderRadius: 100 }}
                transition={500}
              />
              <Text
                style={{ fontSize: hp(2.5) }}
                className="text-neutral-700 font-medium"
              >
                {/* Raghd Alabdullah */}
                {user?.username}
              </Text>
            </View>
          </View>
        ),
        headerRight: () => (
          <View className="flex-row item-center gap-8">
            <Ionicons name="call" size={hp(2.8)} color="#737373" />
            <Ionicons name="videocam" size={hp(2.8)} color="#737373" />
          </View>
        ),
      }}
    />
  );
}
