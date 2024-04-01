import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const UploadImage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.uploadImage}>
      <View style={styles.uploadImageChild} />
      <Pressable
        style={styles.continue}
        onPress={() => navigation.navigate("ReportResults")}
      >
        <Text style={styles.continue1}>Continue</Text>
      </Pressable>
      <Text
        style={[styles.uploadAPhoto, styles.uploadAPhotoClr]}
      >{`Upload a photo of your Skin Lesion `}</Text>
      <Text style={[styles.systemRequiresYou, styles.frameFlexBox]}>
        System requires you to upload skin image for Cancer Detection. Don't
        worry, your data will stay safe and private.
      </Text>
      <View style={styles.uploadImageItem} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={styles.autoLayoutVertical}>
          <Image
            style={styles.iconlyboldimage}
            contentFit="cover"
            source={require("../assets/iconlyboldimage.png")}
          />
          <Text style={[styles.selectFile, styles.selectFileTypo]}>
            Select file
          </Text>
        </View>
      </View>
      <Text style={styles.selectModel}>Select Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  uploadAPhotoClr: {
    color: Color.colorDarkgreen,
    fontFamily: FontFamily.poppinsRegular,
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  selectFileTypo: {
    lineHeight: 22,
    fontSize: FontSize.bodyLargeMedium_size,
    letterSpacing: 0,
    textAlign: "center",
  },
  uploadImageChild: {
    height: "6.5%",
    width: "81.11%",
    top: "80.75%",
    right: "8.06%",
    bottom: "12.75%",
    left: "10.83%",
    borderRadius: Border.br_36xl,
    backgroundColor: Color.colorForestgreen_200,
    position: "absolute",
  },
  continue1: {
    height: "5.5%",
    width: "35.56%",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "center",
    color: Color.othersWhite,
    fontWeight: "500",
  },
  continue: {
    left: "33.06%",
    top: "81.75%",
    position: "absolute",
  },
  uploadAPhoto: {
    height: "6.88%",
    marginLeft: -147,
    top: "25.88%",
    left: "50%",
    fontSize: 30,
    width: 296,
    textAlign: "center",
    position: "absolute",
  },
  systemRequiresYou: {
    height: "8.13%",
    top: "41.25%",
    left: 39,
    display: "flex",
    width: 293,
    lineHeight: 22,
    fontSize: FontSize.bodyLargeMedium_size,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.colorDarkgreen,
    fontFamily: FontFamily.poppinsRegular,
  },
  uploadImageItem: {
    top: 108,
    left: 32,
    borderRadius: 100,
    borderStyle: "solid",
    borderColor: Color.othersWhite,
    borderWidth: 1,
    width: 299,
    height: 67,
    backgroundColor: Color.colorForestgreen_200,
    position: "absolute",
  },
  vectorIcon: {
    height: "1.15%",
    width: "3.83%",
    top: "16.96%",
    right: "18.03%",
    bottom: "81.89%",
    left: "78.14%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconlyboldimage: {
    width: 28,
    height: 28,
  },
  selectFile: {
    alignSelf: "stretch",
    fontFamily: FontFamily.bodyLargeMedium,
    color: Color.greyscale500,
    marginTop: 16,
    fontWeight: "500",
    fontSize: FontSize.bodyLargeMedium_size,
  },
  autoLayoutVertical: {
    alignItems: "center",
    flex: 1,
  },
  frame: {
    top: 443,
    left: 35,
    borderRadius: 32,
    width: 294,
    height: 140,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 32,
    backgroundColor: Color.colorForestgreen_200,
  },
  selectModel: {
    top: 127,
    left: 59,
    fontSize: FontSize.size_xl,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.othersWhite,
    position: "absolute",
  },
  uploadImage: {
    borderRadius: Border.br_18xl,
    backgroundColor: Color.colorForestgreen_300,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    flex: 1,
  },
});

export default UploadImage;
