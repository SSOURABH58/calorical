import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/resuxHooks";
import { auth } from "../auth";
import { setActiveUser } from "../store/slices/userSlice";

const SplashScreen = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const [Status, setStatus] = useState(false);
  //   const [Status, setStatus] = useState(false);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(
      async (authenticatedUser) => {
        try {
          console.log("authenticatedUser", "++++++++++++++", authenticatedUser);
          const details = authenticatedUser?.toJSON();
          authenticatedUser
            ? dispatch(setActiveUser(details))
            : dispatch(setActiveUser(null));
          setStatus(true);
        } catch (error) {
          console.log(error);
        }
      }
    );

    return unsubscribeAuth;
  }, []);

  useEffect(() => {
    if (Status) {
      if (user?.email) {
        console.log(user);
        navigation.replace("Home");
      } else {
        navigation.replace("Login");
      }
    }
  }, [user, Status]);

  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
