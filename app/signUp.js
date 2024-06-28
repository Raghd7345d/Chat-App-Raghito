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

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [profileUrl, setProfileUrl] = useState("");

  const router = useRouter();

  const handleRegister = async () => {
    if (!email || !password || !userName || !profileUrl) {
      Alert.alert("All fields are required.");
      return;
    }
    setLoading(true);
    try {
      Alert.alert("Registration successful");
      router.push("home");
    } catch (error) {
      Alert.alert("Registration failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomKeyboardView>
      <StatusBar style="dark" />
      <View
        style={{ paddingTop: hp(7), paddingHorizontal: wp(5) }}
        className="flex-1 gap-1"
      >
        <View className="items-center ">
          <Image
            style={{ height: hp(25) }}
            source={require("../assets/Sign-Up.png")}
            resizeMode="contain"
          />
        </View>
        <View className="gap-5">
          <Text
            style={{ fontSize: hp(4) }}
            className="text-center font-bold tracking-wider text-neutral-800"
          >
            Sign Up
          </Text>
          <View
            style={{ height: hp(7) }}
            className="flex-row gap-2 px-4 bg-neutral-100 items-center justify-center rounded-xl"
          >
            <AntDesign name="user" size={hp(3)} color="gray" />
            <TextInput
              onChangeText={setUserName}
              style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-500"
              placeholder="UserName"
              placeholderTextColor={"gray"}
              value={userName}
            />
          </View>
          <View
            style={{ height: hp(7) }}
            className="flex-row gap-2 px-4 bg-neutral-100 items-center justify-center rounded-xl"
          >
            <Fontisto name="email" size={hp(3)} color="gray" />
            <TextInput
              onChangeText={setEmail}
              style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-500"
              placeholder="Email address"
              placeholderTextColor={"gray"}
              value={email}
            />
          </View>
          <View
            style={{ height: hp(7) }}
            className="flex-row gap-2 px-4 bg-neutral-100 items-center justify-center rounded-xl"
          >
            <AntDesign name="lock" size={hp(3)} color="gray" />
            <TextInput
              onChangeText={setPassword}
              secureTextEntry
              style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-500"
              placeholder="Password"
              placeholderTextColor={"gray"}
              value={password}
            />
          </View>
          <View
            style={{ height: hp(7) }}
            className="flex-row gap-2 px-4 bg-neutral-100 items-center justify-center rounded-xl"
          >
            <FontAwesome name="photo" size={hp(3)} color="gray" />
            <TextInput
              onChangeText={setProfileUrl}
              style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-500"
              placeholder="Profile Url"
              placeholderTextColor={"gray"}
              value={profileUrl}
            />
          </View>
        </View>
        <View>
          {loading ? (
            <View className="flex-row justify-center">
              <Loading size={hp(16)} />
            </View>
          ) : (
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
    </CustomKeyboardView>
  );
}
