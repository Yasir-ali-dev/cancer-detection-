import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { Padding, Color, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
const FAQ = () => {
  const navigation = useNavigation();
  const [showAnswer, setShowAnswer] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
    question6: false,
  });

  const toggleAnswer = (question) => {
    setShowAnswer({ ...showAnswer, [question]: !showAnswer[question] });
  };

  const renderQuestion = (questionNumber, question, answer) => {
    return (
      <View style={styles.questionContainer} key={`question${questionNumber}`}>
        <TouchableOpacity
          style={[styles.frameParent, styles.frameParentSpaceBlock]}
          onPress={() => toggleAnswer(`question${questionNumber}`)}
        >
          <View style={styles.anyGuidelinesForCapturingIParent}>
            <Text style={styles.questionText}>{question}</Text>
          </View>
        </TouchableOpacity>
        {showAnswer[`question${questionNumber}`] && (
          <View style={styles.answerContainer}>
            <Text style={styles.answerText}>{answer}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.faq}>
      <View style={styles.faqChild} />
      <Image
        style={styles.icroundArrowBackIcon}
        source={require("../assets/icroundarrowback.png")}
      />

      <Text style={styles.faq1}>FAQ</Text>
      <Text style={styles.frequentlyAskedQuestions}>
        Frequently Asked Questions
      </Text>

      <View style={{ marginTop: 20 }} />

      {renderQuestion(
        1,
        "Any guidelines for capturing images?",
        "Yes, to ensure accurate analysis, it's recommended to capture images in well-lit conditions with a high-resolution camera. Additionally, try to capture multiple angles."
      )}
      {renderQuestion(
        2,
        "What if I have technical issues?",
        "If you encounter any technical difficulties or have questions about using the mobile application, you can reach out to our support team for assistance. We provide comprehensive support services to ensure a smooth user experience."
      )}
      {renderQuestion(
        3,
        "Can I input patient information?",
        "Yes, the mobile application allows you to input essential patient information such as medical history and demographics. This information helps enhance the accuracy of the diagnostic results generated by the deep learning models."
      )}
      {renderQuestion(
        4,
        "What do the results include?",
        "The diagnostic results include insights into the likelihood of the cancer type with its severity, being benign or malignant based on analysis by the deep learning models."
      )}
      {renderQuestion(
        5,
        "How do I upload skin lesion images?",
        "You can easily upload skin lesion images from your mobile device directly within the application. Simply navigate to the upload section and follow the prompts to select and submit your images."
      )}
      {renderQuestion(
        6,
        "Can I access past results and patient info?",
        "Yes, the mobile application provides access to a history of previous diagnostic results and patient information for reference and tracking purposes."
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  faq: {
    flex: 1,
    backgroundColor: "#fffcfc",
    paddingVertical: 20,
    borderRadius: 30,
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
  },
  faqChild: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#429924",
    width: 430,
    height: 130,
  },
  icroundArrowBackIcon: {
    position: "absolute",
    height: "2.58%",
    width: "5.58%",
    top: "8.59%",
    right: "88.83%",
  },
  faq1: {
    position: "absolute",
    top: "8%",
    left: "44.17%",
    fontSize: 24,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    color: Color.colorBlack,
  },
  frequentlyAskedQuestions: {
    position: "absolute",
    top: "19.88%",
    left: "22%",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "center",
    color: Color.colorBlack,
  },
  frameParentSpaceBlock: {
    paddingHorizontal: Padding.p_mid,
    height: 50,
    width: 300,
    backgroundColor: Color.colorWhite,
    left: 30,
  },
  iconamoonarrowPosition: {
    zIndex: 1,
    right: "-5%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  questionText: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  answerContainer: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 30,
    paddingVertical: 2,
    shadowColor: "#000000",

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  answerText: {
    fontSize: 14,
    color: "#333333",
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  questionContainer: {
    top: 200,
    marginBottom: 25,
  },
});

export default FAQ;
