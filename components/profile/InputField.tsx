import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextInputBox, { TextInputBoxi } from "../TextInputBox";
import Colors from "../../constants/Colors";
import { Feather } from "@expo/vector-icons";
import Layout from "../../constants/Layout";

const theme = Colors.light;

interface InputField {
  title: string;
  inputs: {
    from: TextInputBoxi;
    to?: TextInputBoxi;
  };
}

const InputField: React.FC<InputField> = ({ title, inputs }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${title} :`}</Text>
      <View style={styles.inputBoxes}>
        <View style={styles.textBoxCont}>
          <TextInputBox>
            <Feather
              style={styles.icon}
              name="edit-2"
              size={18}
              color={theme.textD}
            />
          </TextInputBox>
        </View>

        {inputs?.to && <Text style={styles.text}>{`to`}</Text>}
        {inputs?.to && (
          <View style={styles.textBoxCont}>
            <TextInputBox>
              <Feather
                style={styles.icon}
                name="edit-2"
                size={18}
                color={theme.textD}
              />
            </TextInputBox>
          </View>
        )}
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    width: Layout.window.width * 0.85,
  },
  text: {
    color: theme.textD,
    fontSize: 18,
    zIndex: 1000,
    fontFamily: "Montserrat_600SemiBold",
    marginBottom: 5,
  },
  inputBoxes: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    // backgroundColor: "red",
  },
  textBoxCont: {
    flexGrow: 1,
    // backgroundColor: "red",
    height: 50,
    margin: 5,
    // width: Layout.window.width * 0.4,
  },
  icon: {
    height: 18,
    width: 18,
    zIndex: 1000,
    marginRight: 20,
  },
});
