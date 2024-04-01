import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const ProfileContainer = () => {
  return (
    <View style={styles.topFrame}>
      <View style={styles.nameFrame}>
        <Image
          style={styles.docIconDoctorIconPediatric}
          contentFit="cover"
          source={require("../assets/docicondoctoriconpediatricianiconlogocirclesymbolanimationpngclipartremovebgpreview-1.png")}
        />
        <Text
          style={styles.dilshadHussain92}
        >{`Dilshad Hussain +92 3052016666 `}</Text>
      </View>
      <View style={[styles.ellipseParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <Text style={[styles.text, styles.textClr]}>?</Text>
        <Text style={[styles.help, styles.textClr]}>Help</Text>
      </View>
      <View style={styles.helpFrame} />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    width: 63,
    height: 52,
  },
  textClr: {
    color: Color.secondarySRedLight,
    textAlign: "center",
    position: "absolute",
  },
  docIconDoctorIconPediatric: {
    width: 43,
    height: 47,
  },
  dilshadHussain92: {
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    width: 117,
    marginLeft: 6,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
  },
  nameFrame: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorFuchsia,
    width: 205,
    alignItems: "center",
    paddingLeft: Padding.p_7xs,
    paddingTop: Padding.p_7xs,
    paddingRight: Padding.p_xs,
    paddingBottom: Padding.p_7xs,
    height: 52,
    flexDirection: "row",
  },
  groupChild: {
    top: 0,
    left: 0,
    opacity: 0.05,
    position: "absolute",
    width: 63,
  },
  text: {
    top: 8,
    left: 25,
    fontSize: FontSize.size_5xl,
    letterSpacing: 2.4,
    width: 15,
    height: 26,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.secondarySRedLight,
  },
  help: {
    top: 32,
    left: 18,
    fontSize: FontSize.size_3xs,
    letterSpacing: 1,
    lineHeight: 10,
    fontWeight: "300",
    fontFamily: FontFamily.mitrLight,
    width: 29,
    height: 12,
  },
  ellipseParent: {
    marginLeft: 60,
  },
  helpFrame: {
    width: 66,
    marginLeft: 60,
    height: 66,
  },
  topFrame: {
    top: 68,
    left: 12,
    width: 334,
    flexDirection: "row",
    height: 66,
    position: "absolute",
  },
});

export default ProfileContainer;
