import {
  StyleSheet,
  Text,
  View,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { Profiler, useEffect, useState } from "react";
import Colors from "../constants/Colors";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";
import Layout from "../constants/Layout";
import { Canvas } from "@shopify/react-native-skia";
import NeoReact from "../components/skia/NeoReact";
import { signOut } from "firebase/auth";
import { addToUserProfile, auth } from "../auth";
import { useAppDispatch, useAppSelector } from "../hooks/resuxHooks";
import { setActiveUser } from "../store/slices/userSlice";
import { async } from "@firebase/util";
import { Feather } from "@expo/vector-icons";
import ProfileCard from "../components/profile/ProfileCard";
import InputField from "../components/profile/InputField";

const theme = Colors.light;

const ProfileScreen = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.auth);
  console.log(user);

  const profile = useAppSelector((state) => state.user.profile);
  const [displayProfile, setDisplayProfile] = useState(profile);

  const handleChange = (val: any) => {
    setDisplayProfile((state: any) => ({ ...state, ...val }));
  };
  // console.log(profile);

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(setActiveUser(null));
    console.log("logut", user);
  };

  useEffect(() => {
    if (!user?.email) {
      navigation.replace("Login");
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Header>
        <Ionicons
          style={styles.icon}
          name="ios-arrow-back"
          size={32}
          color="black"
        />
        <Pressable
          onPress={() => {
            handleLogout();
          }}
        >
          <Text style={styles.logoutText}>Log-Out</Text>
        </Pressable>
      </Header>
      <ProfileCard name={user.given_name} />
      {/* <View style={{ height: 15 }} /> */}
      {profile !== displayProfile ? (
        <Pressable
          style={styles.saveBtn}
          onPress={() => addToUserProfile(displayProfile, user.id)}
        >
          <Text style={styles.saveText}>Save</Text>
          <Canvas style={styles.canvas}>
            <NeoReact radius={20} color={theme.indicatorLo} />
          </Canvas>
        </Pressable>
      ) : (
        <View style={{ height: 30 }} />
      )}

      {Object.keys(profile).map((val: string, key) => (
        <InputField
          key={key}
          title={profile[val].title}
          inputs={displayProfile[val]}
          handleChange={(vale) => {
            handleChange({ ...displayProfile, [val]: vale });
          }}
        />
      ))}
      {/* <InputField title={"Name"} inputs={{ from: {}, to: {} }} /> */}
    </View>
    // </KeyboardAvoidingView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: theme.background,
    // paddingTop: "45%",
  },
  icon: {
    height: 32,
    width: 32,
    zIndex: 1000,
    marginRight: 15,
  },
  logoutText: {
    color: theme.indicatorHi,
    textAlign: "right",
    zIndex: 1000,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
  },
  saveText: {
    color: "#fff",
    textAlign: "center",
    zIndex: 1000,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
  },
  profileText: {
    color: theme.textD,
    textAlign: "left",
    zIndex: 1000,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 24,
  },
  profileInfo: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 32,
    // marginBottom: 80,
    zIndex: 1000,
  },
  profileCont: {
    width: "85%",
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    position: "relative",
    flexDirection: "row",
    // backgroundColor: "red",
  },
  canvas: {
    height: 50 + 30,
    // width: Layout.window.width * 0.85 + 30,
    width: "100%",
    position: "absolute",
    zIndex: 100,
  },
  saveBtn: {
    width: 120,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 32,
    position: "relative",
    flexDirection: "row",
    alignSelf: "flex-end",
    marginRight: 32,
  },
});
