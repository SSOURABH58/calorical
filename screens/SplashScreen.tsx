import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/resuxHooks";
import { auth, getProfileDoc } from "../auth";
import { setActiveUser, setUserProfile } from "../store/slices/userSlice";

const SplashScreen = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.auth);
  const userProfile = useAppSelector((state) => state.user.profile);
  const [Status, setStatus] = useState(false);
  const [ProfileStatus, setProfileStatus] = useState(false);
  //   const [Status, setStatus] = useState(false);

  useEffect(() => {
    // const curentUser = auth?.currentUser();
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
        (async () => {
          const profile = await getProfileDoc(user?.id);
          if (profile) {
            const data = profile?.toJSON();
            dispatch(setUserProfile({ ...data, fetchedProfile: true }));
            // setProfileStatus(data)
          } else {
            navigation.replace("Profile");
          }
        })();
        // navigation.replace("Home");
      } else {
        navigation.replace("Login");
      }
    }
  }, [user, Status]);

  useEffect(() => {
    if (userProfile?.fetchedProfile) {
      navigation.replace("Home");
    }
  }, [userProfile]);

  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
