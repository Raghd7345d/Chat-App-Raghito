import React from "react";
import { ScrollView, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function MeessageItem({ message, currentUser }) {
  if (currentUser?.userId == message?.userId)
    return (
      <View className="flex-row justify-end mb-3 mr-3">
        <View style={{ width: wp(80) }}>
          <View className="flex self-end p-3 rounded-xl bg-white border border-neutral-200">
            <Text style={{ fontSize: hp(2) }}>{message?.text}</Text>
          </View>
        </View>
      </View>
    );
  else {
    return (
      <View style={{ width: wp(80) }} className="ml-3 mb-3">
        <View className="flex self-start p-4 px-3 rounded-xl bg-orange-200 border border-neutral-200">
          <Text style={{ fontSize: hp(2) }}> {message?.text}</Text>
        </View>
      </View>
    );
  }
}
