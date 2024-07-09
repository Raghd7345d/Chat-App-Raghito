import React, { Component } from "react";
import { Text, View, Button, Platform, useState } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { blurhash } from "../BluUti/common";
import { useAuth } from "../context/authContext";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { MenuItems } from "./CustomMenuItems";
import AntDesign from "@expo/vector-icons/AntDesign";

const ios = Platform.OS == "ios";

export default function HomeHeader() {
  const { top } = useSafeAreaInsets();
  const { user, logout } = useAuth();

  function handleProfile() {
    console.log("Hi");
  }
  async function handleLogOut() {
    await logout();
  }
  return (
    <View
      style={{ paddingTop: ios ? top : top + 10 }}
      className="flex-row justify-between px-5 bg-orange-400 pb-6 rounded-b-3xl shadow-2xl"
    >
      <View>
        <Text style={{ fontSize: hp(3) }} className="font-medium text-white">
          Chats
        </Text>
      </View>
      <View>
        <Menu>
          <MenuTrigger x>
            <Image
              style={{ height: hp(4.3), aspectRatio: 1, borderRadius: 100 }}
              source={user?.profileUrl}
              placeholder={blurhash}
              transition={500}
            />
          </MenuTrigger>
          <MenuOptions
            customStyles={{
              optionsContainer: {
                borderRadius: 10,
                borderCurve: "continuous",
                marginTop: 20,
                backgroundColor: "white",
                width: 160,
              },
            }}
          >
            <MenuItems
              text="Profile"
              action={handleProfile}
              value={null}
              icon={<AntDesign name="user" size={hp(3)} color="gray" />}
            />
            <Divider />
            <MenuItems
              text="Sign Out"
              action={handleLogOut}
              value={null}
              icon={<AntDesign name="logout" size={hp(3)} color="gray" />}
            />
          </MenuOptions>
        </Menu>
      </View>
    </View>
  );
}
function Divider() {
  return <View className="p-[1px] w-full bg-neutral-200" />;
}
