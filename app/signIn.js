import React, { Component, useRef, useState } from "react";
import {
  StatusBar,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import SignUp from "./signUp";
import Loading from "../components/Loading";

export default function SignIn() {
  const [loading, setloading] = useState(false);

  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handloLogin = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Sign in yalla");
      return;
    }
  };
  return (
    <View className="flex-1">
      <StatusBar style="dark" />

      <View
        style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }}
        className="flex-1 gap-1"
      >
        {/* Hier ist Image */}
        <View className="items-center ">
          <Image
            style={{ height: hp(25) }}
            source={require("../assets/Sign-In.png")}
            resizeMode="contain"
          />
        </View>
        {/* Sign In */}
        <View className="gap-5">
          <Text
            style={{ fontSize: hp(4) }}
            className="text-center font-bold tracking-wider text-neutral-800"
          >
            Sign In
          </Text>

          {/* Inputs */}

          <View
            style={{ height: hp(7) }}
            className="flex-row gap-2 px-4 bg-neutral-100 items-center justify-center rounded-xl"
          >
            <Fontisto name="email" size={hp(3)} color="gray" />
            <TextInput
              onChangeText={(value) => (emailRef.current = value)}
              className="flex-1 font-semibold text-neutral-500 "
              placeholder=" Email address"
              placeholderTextColor={"gray"}
            />
          </View>
          <View
            style={{ height: hp(7) }}
            className="flex-row gap-2 px-4 bg-neutral-100 items-center justify-center rounded-xl"
          >
            <AntDesign name="lock" size={hp(3)} color="gray" />
            <TextInput
              onChangeText={(value) => (passwordRef.current = value)}
              secureTextEntry
              style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-500 "
              placeholder="Password"
              placeholderTextColor={"gray"}
            />
          </View>
          <Text
            style={{ fontSize: hp(1.8) }}
            className="font-semibold text-right text-neutral-500"
          >
            Forgot password?
          </Text>
        </View>
        {/* Submit button */}
        <View>
          {loading ? (
            <View className="flex-row justify-center">
              <Loading size={hp(16)} />
            </View>
          ) : (
            <TouchableOpacity
              onPress={handloLogin}
              style={{ height: hp(6.7) }}
              className="bg-orange-600 rounded-xl justify-center items-center"
            >
              <Text
                style={{ fontSize: hp(2.7) }}
                className="font-semibold text-white tracking-wider"
              >
                Sign In
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View className="flex-row justify-center">
          <Text
            className="font-semibold text-neutral-500"
            style={{ fontSize: hp(1.8) }}
          >
            Don't have an account?
          </Text>
          <Pressable onPress={() => router.push("signUp")}>
            <Text
              className="font-bold text-orange-600"
              style={{ fontSize: hp(1.8) }}
            >
              Sign up
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
