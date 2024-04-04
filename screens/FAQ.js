import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, FontSize, FontFamily } from "../GlobalStyles";

const FAQ = () => {
  return (
    <View style={styles.faq}>
      <View style={styles.faqChild} />
      <Image
        style={styles.icroundArrowBackIcon}
        contentFit="cover"
        source={require("../assets/icroundarrowback.png")}
      />
      <Text style={styles.faq1}>FAQ</Text>
      <Text style={styles.frequentlyAskedQuestions}>
        Frequently Asked Questions
      </Text>
      <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
        <View style={styles.anyGuidelinesForCapturingIParent}>
          <Text style={styles.whatIfITypo}>
            Any guidelines for capturing images?
          </Text>
          <Image
            style={[
              styles.iconamoonarrowLeft2Bold,
              styles.iconamoonarrowPosition,
            ]}
            contentFit="cover"
            source={require("../assets/iconamoonarrowleft2bold.png")}
          />
        </View>
        <Text style={styles.whatIsThe}>
          What is the most popular online shopping store?What is the most
          popular online shopping store?What is the most popular online shopping
          store?What is the most popular online shopping store?
        </Text>
      </View>
      <View style={[styles.frameGroup, styles.frameParentSpaceBlock]}>
        <View style={styles.anyGuidelinesForCapturingIParent}>
          <Text style={[styles.whatIfI, styles.whatIfITypo]}>
            {" "}
            What if I have technical issues?
          </Text>
          <Image
            style={[
              styles.iconamoonarrowLeft2Bold,
              styles.iconamoonarrowPosition,
            ]}
            contentFit="cover"
            source={require("../assets/iconamoonarrowleft2bold.png")}
          />
        </View>
        <Text style={styles.whatIsThe}>
          What is the most popular online shopping store?What is the most
          popular online shopping store?What is the most popular online shopping
          store?What is the most popular online shopping store?
        </Text>
      </View>
      <View style={[styles.frameContainer, styles.frameParentSpaceBlock]}>
        <View style={styles.anyGuidelinesForCapturingIParent}>
          <Text style={[styles.whatIfI, styles.whatIfITypo]}>
            Can I access past results and patient info?
          </Text>
          <Image
            style={[
              styles.iconamoonarrowLeft2Bold,
              styles.iconamoonarrowPosition,
            ]}
            contentFit="cover"
            source={require("../assets/iconamoonarrowleft2bold.png")}
          />
        </View>
        <Text style={styles.whatIsThe}>
          What is the most popular online shopping store?What is the most
          popular online shopping store?What is the most popular online shopping
          store?What is the most popular online shopping store?
        </Text>
      </View>
      <View style={[styles.frameView, styles.frameParentSpaceBlock]}>
        <View style={styles.anyGuidelinesForCapturingIParent}>
          <Text style={[styles.whatIfI, styles.whatIfITypo]}>
            What do the results include?
          </Text>
          <Image
            style={[
              styles.iconamoonarrowLeft2Bold,
              styles.iconamoonarrowPosition,
            ]}
            contentFit="cover"
            source={require("../assets/iconamoonarrowleft2bold.png")}
          />
        </View>
        <Text style={styles.whatIsThe}>
          What is the most popular online shopping store?What is the most
          popular online shopping store?What is the most popular online shopping
          store?What is the most popular online shopping store?
        </Text>
      </View>
      <View style={[styles.frameParent1, styles.frameParentSpaceBlock]}>
        <View style={styles.anyGuidelinesForCapturingIParent}>
          <Text style={[styles.whatIfI, styles.whatIfITypo]}>
            Can I input patient information?
          </Text>
          <Image
            style={[
              styles.iconamoonarrowLeft2Bold,
              styles.iconamoonarrowPosition,
            ]}
            contentFit="cover"
            source={require("../assets/iconamoonarrowleft2bold.png")}
          />
        </View>
        <Text style={styles.whatIsThe}>
          What is the most popular online shopping store?What is the most
          popular online shopping store?What is the most popular online shopping
          store?What is the most popular online shopping store?
        </Text>
      </View>
      <View style={[styles.frameParent2, styles.frameParentSpaceBlock]}>
        <View style={styles.howDoIUploadSkinLesionImParent}>
          <Text style={[styles.whatIfI, styles.whatIfITypo]}>
            How do I upload skin lesion images?
          </Text>
          <Image
            style={[
              styles.iconamoonarrowLeft2Bold5,
              styles.iconamoonarrowPosition,
            ]}
            contentFit="cover"
            source={require("../assets/iconamoonarrowleft2bold1.png")}
          />
        </View>
        <Text style={styles.whatIsThe}>
          What is the most popular online shopping store?What is the most
          popular online shopping store?What is the most popular online shopping
          store?What is the most popular online shopping store?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mid,
    height: 50,
    width: 300,
    backgroundColor: Color.colorWhite,
    left: 30,
    position: "absolute",
    overflow: "hidden",
  },
  iconamoonarrowPosition: {
    zIndex: 1,
    right: "-0.04%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  whatIfITypo: {
    zIndex: 0,
    fontSize: FontSize.size_smi,
    color: Color.colorGray,
    fontFamily: FontFamily.poppinsRegular,
    alignSelf: "stretch",
    textAlign: "left",
  },
  faqChild: {
    top: 0,
    left: 0,
    backgroundColor: "#429924",
    width: 430,
    height: 130,
    position: "absolute",
  },
  icroundArrowBackIcon: {
    height: "2.58%",
    width: "5.58%",
    top: "8.59%",
    right: "88.83%",
    bottom: "88.84%",
    left: "5.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  faq1: {
    height: "7.63%",
    width: "36.11%",
    top: "8%",
    left: "44.17%",
    fontSize: 24,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  frequentlyAskedQuestions: {
    height: "3.63%",
    width: "78.06%",
    top: "19.88%",
    left: "11.11%",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconamoonarrowLeft2Bold: {
    height: "37.67%",
    width: "5.39%",
    bottom: "62.33%",
    left: "94.65%",
  },
  anyGuidelinesForCapturingIParent: {
    width: 271,
    height: 60,
    overflow: "hidden",
  },
  whatIsThe: {
    fontSize: FontSize.size_sm,
    width: 574,
    display: "none",
    marginTop: 16,
    color: Color.colorGray,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  frameParent: {
    top: 584,
  },
  whatIfI: {
    height: 54,
  },
  frameGroup: {
    top: 514,
  },
  frameContainer: {
    top: 430,
  },
  frameView: {
    top: 360,
  },
  frameParent1: {
    top: 300,
  },
  iconamoonarrowLeft2Bold5: {
    height: "37.78%",
    width: "5.38%",
    bottom: "62.22%",
    left: "94.66%",
  },
  howDoIUploadSkinLesionImParent: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frameParent2: {
    top: 240,
  },
  faq: {
    borderRadius: 30,
    backgroundColor: "#fffcfc",
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default FAQ;
