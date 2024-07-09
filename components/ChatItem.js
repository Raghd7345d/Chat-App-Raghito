import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { blurhash, fromDate, fromatDate, getRoomId } from "../BluUti/common";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
export default function ChatItem({
  item,
  index,
  router,
  noBorder,
  currentUser,
}) {
  const [lastMessage, setLastMessage] = useState(undefined);
  useEffect(() => {
    let roomId = getRoomId(currentUser?.userId, item?.userId);
    const docRef = doc(db, "rooms", roomId);
    const messagesRef = collection(docRef, "messages");
    const q = query(messagesRef, orderBy("createdAt", "desc"));
    let unsub = onSnapshot(q, (snapshot) => {
      let allMessages = snapshot.docs.map((doc) => {
        return doc.data();
      });
      setLastMessage(allMessages[0] ? allMessages[0] : null);
    });
    return unsub;
  }, []);

  const openChatRoom = () => {
    router.push({ pathname: "/chatroom", params: item });
  };

  function renderTime() {
    if (lastMessage) {
      let date = lastMessage?.createdAt;
      return fromatDate(new Date(date?.seconds * 1000));
    }
  }

  function renderLastMessage() {
    if (typeof lastMessage == "undefined") return "Loading...";
    if (lastMessage) {
      if (currentUser?.userId == lastMessage?.userId)
        return "You: " + lastMessage?.text;
      return lastMessage?.text;
    } else {
      return "Say Hi 😁👋🏼";
    }
  }
  return (
    <TouchableOpacity
      onPress={openChatRoom}
      className={`flex-row justify-between py-3 mx-2 items-center pd-2 mb-3 gap-3 bg-neutral-100${
        noBorder ? "" : " border-b border-b-neutral-200"
      }`}
    >
      <Image
        style={{ height: hp(8), aspectRatio: 1 }}
        className="rounded-full"
        source={item?.profileUrl}
        transition={500}
        placeholder={blurhash}
      />

      {/* Name and Last message */}

      <View className="flex-1 gab-3">
        <View className="flex-row justify-between">
          <Text
            style={{ fontSize: hp(1.8) }}
            className="font-semibold text-neutral-800"
          >
            {item?.username}
          </Text>
          <Text
            style={{ fontSize: hp(1.6) }}
            className="font-medium text-neutral-500"
          >
            {renderTime()}
          </Text>
        </View>
        <Text
          style={{ fontSize: hp(1.6) }}
          className="font-medium text-neutral-500"
        >
          {renderLastMessage()}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
