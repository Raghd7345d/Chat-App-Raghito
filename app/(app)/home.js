import React, { useEffect, useState } from "react";
import { View, StatusBar, ActivityIndicator } from "react-native";
import { useAuth } from "../../context/authContext";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import ChatList from "../../components/ChatList";
import { getDocs, query, where, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig"; // Adjust this according to your Firebase setup

export default function Home() {
  const { logout, user } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.uid) {
      getUsers();
    }
  }, []);

  const getUsers = async () => {
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("userId", "!=", user?.uid));

      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data() });
      });
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="light" />
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ChatList currentUser={user} users={users} />
      )}
    </View>
  );
}
