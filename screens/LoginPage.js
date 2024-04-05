import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const LoginPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginPage}>
      <View style={[styles.loginPageChild, styles.loginShadowBox]} />
      <View style={[styles.loginPageItem, styles.loginShadowBox]} />
      <TextInput
        style={[styles.username, styles.usernameTypo]}
        // onChangeText={(text) => handleChange("name", text)}
        placeholder="Enter username"
      />
      <TextInput
        style={[styles.password, styles.usernameTypo]}
        // onChangeText={(text) => handleChange("name", text)}
        placeholder="Enter password"
      />
      <Text style={[styles.loginToYour, styles.welcomeClr]}>
        Login to your account
      </Text>
      <Text style={[styles.rememberMe, styles.rememberMeTypo]}>
        Remember me
      </Text>
      {/* <View  /> */}

      <TouchableOpacity
        style={[
          styles.login,
          {
            backgroundColor: "#38903B",
            paddingHorizontal: 133,
            paddingVertical: 10,
            borderRadius: 10,
          },
        ]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text>Login</Text>
      </TouchableOpacity>

      <Text style={[styles.dontHaveAnContainer, styles.welcomeClr]}>
        <Text style={styles.dontHaveAnTypo}>{`Don't have an account? `}</Text>
        <Text style={styles.login1Typo}>Register</Text>
      </Text>
      <Text style={[styles.welcome, styles.welcomeClr]}>{`Welcome `}</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={styles.rectangleView} />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginShadowBox: {
    backgroundColor: Color.colorForestgreen_100,
    borderRadius: Border.br_smi,
    left: "11.17%",
    right: "11.39%",
    width: "77.44%",
    height: "6.44%",
    position: "absolute",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  usernameTypo: {
    textAlign: "left",
    color: Color.othersWhite,
    left: "25%",
    height: "5.13%",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.bodyLargeMedium_size,
    position: "absolute",
  },
  welcomeClr: {
    color: Color.colorDarkgreen,
    textAlign: "left",
    position: "absolute",
  },
  rememberMeTypo: {
    fontSize: FontSize.size_sm,
    top: "61.75%",
    height: "4.5%",
    color: Color.colorDarkgreen,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    textAlign: "left",
    position: "absolute",
  },
  login1Typo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  loginPageChild: {
    top: "46.81%",
    bottom: "46.75%",
  },
  loginPageItem: {
    top: "54.33%",
    bottom: "39.24%",
  },
  username: {
    width: "35%",
    top: "47.95%",
  },
  password: {
    width: "30.83%",
    top: "55.25%",
  },
  loginToYour: {
    height: "3.38%",
    width: "62.22%",
    top: "39%",
    left: "25.28%",
    fontSize: FontSize.text1_size,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
  },
  forgetPassword: {
    width: "34.17%",
    left: "57.5%",
  },
  rememberMe: {
    width: "30.28%",
    left: "17.5%",
  },
  loginPageInner: {
    top: "83.38%",
    right: "11.17%",
    bottom: "10.19%",
    left: "11.39%",
    borderRadius: Border.br_36xl,
    backgroundColor: Color.colorForestgreen_200,
    width: "77.44%",
    height: "6.44%",
    position: "absolute",
  },
  login1: {
    width: "23.06%",
    fontSize: FontSize.size_5xl,
    height: "2.5%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorBlack,
  },
  login: {
    left: "11.56%",
    top: "84.5%",
    position: "absolute",
  },
  dontHaveAnTypo: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
  },
  dontHaveAnContainer: {
    height: "3.75%",
    width: "76.67%",
    top: "92.13%",
    left: "13.61%",
    fontSize: FontSize.bodyLargeMedium_size,
    color: Color.colorDarkgreen,
  },
  welcome: {
    height: "8.5%",
    width: "71.67%",
    top: "29.13%",
    left: "19.72%",
    fontSize: 50,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkgreen,
  },
  vectorIcon: {
    width: "5.81%",
    top: "48.74%",
    right: "79.56%",
    bottom: "48.58%",
    left: "14.64%",
    height: "2.69%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  logoIcon: {
    top: 45,
    left: 50,
    width: 274,
    height: 180,
    position: "absolute",
  },
  vectorIcon1: {
    width: "5.08%",
    top: "56.15%",
    right: "80.28%",
    bottom: "41.16%",
    left: "14.64%",
    height: "2.69%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  rectangleView: {
    top: 499,
    left: 46,
    backgroundColor: Color.othersWhite,
    width: 11,
    height: 11,
    position: "absolute",
  },
  vectorIcon2: {
    height: "0.54%",
    width: "1.64%",
    top: "62.71%",
    right: "84.83%",
    bottom: "36.75%",
    left: "13.53%",
  },
  loginPage: {
    borderRadius: Border.br_18xl,
    backgroundColor: Color.colorForestgreen_300,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default LoginPage;
