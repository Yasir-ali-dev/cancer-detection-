import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ProfileContainer from "../components/ProfileContainer";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dashboard}>
      <Pressable
        style={[styles.addPatient, styles.reportChildLayout]}
        onPress={() => navigation.navigate("AddPatient")}
      >
        <View style={[styles.addPatientChild, styles.childShadowBox1]} />
        <Text style={styles.addPatient1}>Add Patient</Text>
        <Image
          style={styles.patientImgIcon}
          contentFit="cover"
          source={require("../assets/patient-img.png")}
        />
      </Pressable>
      <View style={[styles.report, styles.reportChildLayout]}>
        <View style={[styles.reportChild, styles.childShadowBox1]} />
        <Text style={[styles.reports, styles.reportsTypo]}>Reports</Text>
        <Image
          style={styles.reportImgIcon}
          contentFit="cover"
          source={require("../assets/report-img.png")}
        />
      </View>
      <View style={[styles.feedback, styles.reportChildLayout]}>
        <View style={[styles.feedbackChild, styles.childShadowBox1]} />
        <Text style={[styles.feedBack, styles.reportsTypo]}>Feed Back</Text>
        <Image
          style={styles.feedbackImgIcon}
          contentFit="cover"
          source={require("../assets/feedback-img.png")}
        />
      </View>
      <View style={[styles.managePatients, styles.manageLayout]}>
        <View style={[styles.managePatientsChild, styles.manageLayout]} />
        <Image
          style={[styles.manageImgIcon, styles.imgIconPosition]}
          contentFit="cover"
          source={require("../assets/manage-img.png")}
        />
        <Text style={[styles.managePatientsDetails, styles.captureTheSkinTypo]}>
          Manage Patients Details
        </Text>
      </View>
      <View style={[styles.education, styles.educationPosition]}>
        <View style={[styles.educationChild, styles.childShadowBox]} />
        <Text style={[styles.educationResources, styles.resultsSummaryTypo]}>
          Education Resources
        </Text>
        <Image
          style={[styles.educationImgIcon, styles.imgIconLayout]}
          contentFit="cover"
          source={require("../assets/educationimg.png")}
        />
      </View>
      <View style={[styles.results, styles.manageLayout]}>
        <View style={[styles.resultsChild, styles.childShadowBox]} />
        <Image
          style={[styles.resultImgIcon, styles.educationPosition]}
          contentFit="cover"
          source={require("../assets/result-img.png")}
        />
        <Text style={[styles.resultsSummary, styles.resultsSummaryTypo]}>
          Results Summary
        </Text>
      </View>
      <Pressable
        style={[styles.capture, styles.captureLayout]}
        onPress={() => navigation.navigate("UploadImage")}
      >
        <View style={[styles.captureChild, styles.captureLayout]} />
        <Image
          style={[styles.captureImgIcon, styles.imgIconLayout]}
          contentFit="cover"
          source={require("../assets/capture-img.png")}
        />
        <Text style={[styles.captureTheSkin, styles.dermdetectFlexBox]}>
          Capture the Skin lesion for cancer detection
        </Text>
      </Pressable>
      <ProfileContainer />
      <Image
        style={styles.skinaccuracyRemovebgPreviewIcon}
        contentFit="cover"
        source={require("../assets/skinaccuracyremovebgpreview-1.png")}
      />
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Text style={[styles.dermdetect, styles.dermdetectFlexBox]}>
          DermDetect
        </Text>
      </View>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  reportChildLayout: {
    height: 98,
    position: "absolute",
  },
  childShadowBox1: {
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  reportsTypo: {
    top: 69,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  manageLayout: {
    width: 320,
    height: 60,
  },
  imgIconPosition: {
    left: 21,
    width: 48,
  },
  captureTheSkinTypo: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  educationPosition: {
    left: 20,
    position: "absolute",
  },
  childShadowBox: {
    backgroundColor: Color.colorMidnightblue_100,
    width: 320,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  resultsSummaryTypo: {
    height: 21,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mid,
    textAlign: "left",
    position: "absolute",
  },
  imgIconLayout: {
    height: 55,
    position: "absolute",
  },
  captureLayout: {
    height: 83,
    width: 344,
    position: "absolute",
  },
  dermdetectFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  headerPosition: {
    top: "0%",
    position: "absolute",
  },
  addPatientChild: {
    backgroundColor: "#fbe77e",
    height: 98,
    position: "absolute",
    width: 110,
  },
  addPatient1: {
    top: 72,
    left: 11,
    width: 94,
    height: 22,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  patientImgIcon: {
    left: 29,
    height: 53,
    width: 52,
    top: 10,
    position: "absolute",
  },
  addPatient: {
    width: 110,
    height: 98,
    left: 7,
    top: 256,
  },
  reportChild: {
    backgroundColor: "#94ff8b",
    height: 98,
    position: "absolute",
    width: 110,
  },
  reports: {
    left: 33,
    width: 73,
    height: 22,
  },
  reportImgIcon: {
    left: 31,
    height: 50,
    width: 52,
    top: 10,
    position: "absolute",
  },
  report: {
    left: 129,
    width: 110,
    height: 98,
    top: 256,
  },
  feedbackChild: {
    backgroundColor: "#ff7d6c",
    width: 103,
    height: 98,
    position: "absolute",
  },
  feedBack: {
    left: 17,
    width: 87,
    height: 23,
  },
  feedbackImgIcon: {
    borderRadius: 41,
    width: 48,
    left: 28,
    height: 50,
    top: 10,
    position: "absolute",
  },
  feedback: {
    left: 248,
    width: 104,
    top: 256,
  },
  managePatientsChild: {
    backgroundColor: "rgba(0, 53, 156, 0.25)",
    height: 60,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  manageImgIcon: {
    top: 7,
    height: 44,
    position: "absolute",
  },
  managePatientsDetails: {
    top: 22,
    width: 226,
    height: 16,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 89,
    textAlign: "left",
    position: "absolute",
  },
  managePatients: {
    top: 583,
    height: 60,
    left: 19,
    width: 320,
    position: "absolute",
  },
  educationChild: {
    height: 59,
  },
  educationResources: {
    top: 16,
    left: 88,
    width: 215,
  },
  educationImgIcon: {
    top: 5,
    left: 21,
    width: 48,
  },
  education: {
    top: 655,
    height: 60,
    width: 320,
  },
  resultsChild: {
    height: 60,
  },
  resultImgIcon: {
    width: 53,
    height: 51,
    top: 5,
  },
  resultsSummary: {
    top: 20,
    width: 188,
    left: 89,
    height: 21,
  },
  results: {
    top: 726,
    height: 60,
    left: 19,
    width: 320,
    position: "absolute",
  },
  captureChild: {
    backgroundColor: "#86fdda",
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  captureImgIcon: {
    top: 14,
    width: 66,
    left: 28,
    height: 55,
  },
  captureTheSkin: {
    top: 26,
    right: 5,
    fontSize: FontSize.bodyLargeMedium_size,
    width: 240,
    height: 20,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  capture: {
    top: 154,
    left: 7,
  },
  skinaccuracyRemovebgPreviewIcon: {
    top: 366,
    left: 25,
    width: 309,
    height: 205,
    position: "absolute",
  },
  headerChild: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorForestgreen_200,
    width: "100%",
  },
  dermdetect: {
    top: 4,
    left: 85,
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorSteelblue,
    width: 212,
    height: 38,
  },
  header: {
    height: "5.58%",
    width: "106.28%",
    right: "-3.5%",
    bottom: "94.43%",
    left: "-2.78%",
  },
  vectorIcon: {
    top: 21,
    left: 34,
    width: 22,
    height: 15,
    display: "none",
    position: "absolute",
  },
  dashboard: {
    borderRadius: Border.br_19xl,
    backgroundColor: Color.c0,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Dashboard;
