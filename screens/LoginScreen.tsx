import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import colors from "./../constants/Colors";
import LoginBtn from "../components/LoginBtn";
import { AntDesign } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {
  // getAuth,
  GoogleAuthProvider,
  signInWithCredential,
  signOut,
} from "firebase/auth";
import { auth } from "../auth";

WebBrowser.maybeCompleteAuthSession();

const theme = colors.light;

const LoginScreen = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    expoClientId:
      "763831792572-s000veeifhkgtfudc5i4r2a3r25uk6co.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      // const auth = getAuth();
      // console.log("response", response);
      const credential = GoogleAuthProvider.credential(id_token);
      console.log("credential", credential);

      signInWithCredential(auth, credential).catch((error) => {
        // Handle Errors here.
        console.log("error", error, error.email);

        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The credential that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <View style={styles.textCont}>
        <Text style={[styles.text, { fontSize: 32 }]}>{`Welcome`}</Text>
        <Text
          style={[styles.text, { fontSize: 18 }]}
        >{`Let's start a healthy diet `}</Text>
      </View>
      <LoginBtn
        title="Login with Google"
        onPress={() => {
          promptAsync();
        }}
      >
        <AntDesign
          style={styles.icon}
          name="google"
          size={32}
          color={theme.textD}
        />
      </LoginBtn>
      <LoginBtn
        title="Login with Apple"
        onPress={() => {
          signOut(auth);
        }}
      >
        <AntDesign
          style={styles.icon}
          name="apple1"
          size={32}
          color={theme.textD}
        />
      </LoginBtn>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: theme.background,
    paddingTop: "45%",
  },
  icon: {
    height: 32,
    width: 32,
    zIndex: 1000,
    marginRight: 15,
  },
  text: {
    color: theme.textS,
    textAlign: "left",
    zIndex: 1000,
    fontFamily: "Montserrat_400Regular",
  },
  textCont: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: "80%",
    marginBottom: 80,
  },
});
