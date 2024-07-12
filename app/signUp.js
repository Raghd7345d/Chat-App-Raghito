import React, { useRef, useState } from "react";
import {
  StatusBar,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
  Platform,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useRouter } from "expo-router";
import Loading from "../components/Loading";
import AntDesign from "@expo/vector-icons/AntDesign";
import { FontAwesome } from "@expo/vector-icons";
import CustomKeyboardView from "../components/CustomKeyboardView";
import { useAuth } from "../context/authContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const ios = Platform.OS == "ios";

export default function SignUp() {
  const { top } = useSafeAreaInsets();

  const [loading, setloading] = useState(false);
  const { register } = useAuth();
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const profileRef = useRef();
  const handleRegister = async () => {
    if (
      !emailRef.current ||
      !passwordRef.current ||
      !usernameRef.current ||
      !profileRef.current
    ) {
      Alert.alert("All fields are required.");
      return;
    }
    setloading(true);

    let response = await register(
      emailRef.current,
      passwordRef.current,
      usernameRef.current,
      profileRef.current
    );
    setloading(false);
    if (!response.success) {
      Alert.alert("Sign Up", response.msg);
    }
  };
  return (
    <View className="flex-1">
      {/* // <CustomKeyboardView inChat={true}> */}
      <StatusBar style="dark" />
      <View
        style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }}
        className="flex-1 gap-1"
      >
        {/* Hier ist Image */}
        <View className="items-center ">
          <Image
            style={{ height: hp(20) }}
            source={require("../assets/Sign-Up.png")}
            resizeMode="contain"
          />
        </View>
        {/* Sign In */}
        <View className="gap-5">
          <Text
            style={{ fontSize: hp(4) }}
            className="text-center font-bold tracking-wider text-neutral-800"
          >
            Sign Up
          </Text>

          {/* Inputs */}

          <View
            style={{ height: hp(7) }}
            className="flex-row gap-2 px-4 bg-neutral-100 items-center justify-center rounded-xl"
          >
            <AntDesign name="user" size={hp(3)} color="gray" />
            <TextInput
              onChangeText={(value) => (usernameRef.current = value)}
              className="flex-1 font-semibold text-neutral-500 "
              placeholder="Username"
              placeholderTextColor={"gray"}
              style={{ fontSize: hp(2) }}
            />
          </View>
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
              style={{ fontSize: hp(2) }}
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
          <View
            style={{ height: hp(7) }}
            className="flex-row gap-2 px-4 bg-neutral-100 items-center justify-center rounded-xl"
          >
            <FontAwesome name="photo" size={hp(3)} color="gray" />
            <TextInput
              onChangeText={(value) => (profileRef.current = value)}
              className="flex-1 font-semibold text-neutral-500 "
              placeholder="Profile url"
              placeholderTextColor={"gray"}
              style={{ fontSize: hp(2) }}
            />
          </View>
        </View>
        {/* Submit button */}
        <View>
          {loading ? (
            <View className="flex-row justify-center">
              <Loading size={hp(16)} />
            </View>
          ) : (
            <View className="pt-3">
              <TouchableOpacity
                onPress={handleRegister}
                style={{ height: hp(6.7) }}
                className="bg-orange-600 rounded-xl justify-center items-center"
              >
                <Text
                  style={{ fontSize: hp(2.7) }}
                  className="font-semibold text-white tracking-wider"
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View className="flex-row justify-center">
          <Text
            className="font-semibold text-neutral-500"
            style={{ fontSize: hp(1.8) }}
          >
            Already have an account?
          </Text>
          <Pressable onPress={() => router.push("signIn")}>
            <Text
              className="font-bold text-orange-600"
              style={{ fontSize: hp(1.8) }}
            >
              Sign In
            </Text>
          </Pressable>
        </View>
      </View>
      {/* </CustomKeyboardView> */}
    </View>
  );
}
