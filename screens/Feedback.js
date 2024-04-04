import * as React from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Feedback = () => {
  return (
    <View style={styles.feedback}>
      <View style={styles.nameField}>
        <Text style={[styles.patientName, styles.feedBackTypo]}>
          Patient Name
        </Text>
        <TextInput
          style={[styles.nameFieldChild, styles.fieldChildShadowBox2]}
          placeholder=" Name"
        />
      </View>
      <View style={[styles.lesioncolorField, styles.fieldLayout1]}>
        <Text style={[styles.lesionColor, styles.lesionTypo]}>
          Lesion Color
        </Text>
        <TextInput
          style={[styles.lesioncolorFieldChild, styles.fieldChildShadowBox1]}
          placeholder=" Lesion Color"
        />
      </View>
      <View style={[styles.lesionlocationField, styles.fieldLayout]}>
        <Text style={[styles.lesionLocation, styles.lesionTypo]}>
          Lesion Location
        </Text>
        <TextInput
          style={[styles.lesionlocationFieldChild, styles.fieldChildShadowBox]}
          placeholder=" Lesion Location"
        />
      </View>
      <View style={[styles.lesionsizeField, styles.fieldPosition]}>
        <Text style={[styles.lesionLocation, styles.lesionTypo]}>
          Lesion Size
        </Text>
        <TextInput
          style={[styles.lesionsizeFieldChild, styles.fieldChildShadowBox]}
          placeholder=" Lesion Size"
        />
      </View>
      <View style={[styles.lesiontextureField, styles.severityLayout]}>
        <Text style={[styles.lesionTexture, styles.lesionTypo]}>
          Lesion Texture
        </Text>
        <TextInput
          style={[styles.lesiontextureFieldChild, styles.fieldChildShadowBox]}
          placeholder=" Lesion Texture"
        />
      </View>
      <View style={[styles.lesiontypeField, styles.fieldLayout]}>
        <Text style={[styles.lesionType, styles.lesionTypo]}>Lesion Type</Text>
        <TextInput
          style={[styles.lesiontypeFieldChild, styles.fieldChildShadowBox]}
          placeholder=" Lesion Type"
        />
      </View>
      <View style={[styles.severityField, styles.severityLayout]}>
        <Text style={[styles.severity, styles.lesionTypo]}>Severity</Text>
        <TextInput
          style={[styles.severityFieldChild, styles.severityLayout]}
          placeholder=" Severity"
        />
      </View>
      <View style={[styles.feedbackField, styles.fieldPosition]}>
        <TextInput
          style={[styles.feedbackFieldChild, styles.fieldChildShadowBox2]}
          multiline={true}
        />
        <Text style={[styles.feedBack, styles.feedBackTypo]}>Feed back</Text>
      </View>
      <View
        style={{
          top: 724,
          left: 140,
          fontSize: 20,
          color: Color.colorWhite,
          position: "absolute",
        }}
      >
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "#38903B", borderRadius: 5 },
          ]} // Set background color
          onPress={() => {}}
        >
          <Text
            style={{
              paddingHorizontal: 30,
              paddingVertical: 10,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.feedback1, styles.addTypo]}>FeedBack</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    fontSize: FontSize.size_3xl,
    paddingHorizontal: 12,
    color: Color.colorDarkgreen,
  },
  feedBackTypo: {
    alignItems: "flex-start",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  fieldChildShadowBox2: {
    borderWidth: 1,
    borderColor: "#38903B",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.11)",
    borderRadius: 7,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    padding: 5,
  },
  fieldLayout1: {
    height: 50,
    left: 40,
  },
  lesionTypo: {
    height: 16,
    top: 0,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  fieldChildShadowBox1: {
    height: 31,
    top: 19,
    borderWidth: 1,
    borderColor: "#38903B",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.11)",
    borderRadius: 7,
    left: 0,
    backgroundColor: Color.colorWhite,
    padding: 5,
  },
  fieldLayout: {
    height: 49,
    width: 307,
  },
  fieldChildShadowBox: {
    height: 30,
    width: 307,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray,
    borderStyle: "solid",
    borderColor: "#38903B",
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.11)",
    borderRadius: 7,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    padding: 5,
  },
  fieldPosition: {
    left: 40,
    position: "absolute",
  },
  severityLayout: {
    width: 307,
    position: "absolute",
  },
  addTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textTransform: "capitalize",
    position: "absolute",
  },
  patientName: {
    top: 6,
    width: 120,
    height: 14,
    left: 9,
  },
  nameFieldChild: {
    left: 129,
    width: 182,
    top: 0,
    height: 35,
  },
  nameField: {
    top: 121,
    left: 34,
    width: 294,
    height: 26,
    position: "absolute",
  },
  lesionColor: {
    width: 127,
    left: 3,
  },
  lesioncolorFieldChild: {
    width: 306,
    position: "absolute",
  },
  lesioncolorField: {
    top: 165,
    width: 306,
    position: "absolute",
  },
  lesionLocation: {
    width: 109,
    left: 3,
  },
  lesionlocationFieldChild: {
    top: 19,
    height: 30,
  },
  lesionlocationField: {
    top: 293,
    left: 40,
    height: 49,
    position: "absolute",
  },
  lesionsizeFieldChild: {
    top: 19,
    height: 30,
  },
  lesionsizeField: {
    top: 230,
    height: 49,
    width: 307,
  },
  lesionTexture: {
    left: 1,
    width: 121,
  },
  lesiontextureFieldChild: {
    top: 20,
  },
  lesiontextureField: {
    top: 357,
    height: 50,
    left: 40,
  },
  lesionType: {
    width: 112,
    left: 0,
  },
  lesiontypeFieldChild: {
    top: 19,
    height: 30,
  },
  lesiontypeField: {
    top: 423,
    left: 40,
    height: 49,
    position: "absolute",
  },
  severity: {
    width: 105,
    left: 0,
  },
  severityFieldChild: {
    height: 31,
    top: 19,
    borderWidth: 1,
    borderColor: "#38903B",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 0,
    },

    shadowColor: "rgba(0, 0, 0, 0.11)",
    borderRadius: 700,
    left: 0,
    backgroundColor: Color.colorWhite,
    padding: 5,
  },
  severityField: {
    top: 487,
    height: 50,
    left: 40,
  },
  feedbackFieldChild: {
    top: 37,
    height: 119,
    width: 306,
    left: 0,
  },
  feedBack: {
    width: 118,
    height: 43,
    left: 3,
    top: 0,
  },
  feedbackField: {
    top: 538,
    height: 156,
    width: 306,
  },
  feedbackChild: {
    height: "4.88%",
    width: "48.33%",
    top: "89.88%",
    right: "24.17%",
    bottom: "5.25%",
    left: "27.5%",
    borderRadius: 55,
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  add: {
    top: 724,
    left: 159,
    fontSize: 20,
    color: Color.colorWhite,
  },
  feedback1: {
    top: 55,
    left: 117,
    fontSize: 24,
    color: "#38903B",
    width: 161,
    height: 35,
  },
  feedback: {
    borderRadius: 30,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Feedback;
