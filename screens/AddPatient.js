import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  ScrollView,
  Pressable,
  Alert,
  DatePickerAndroid,
  Modal,
  Platform,
} from "react-native";
import { Image } from "expo-image";
import { Color } from "../GlobalStyles";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";

const AddPatient = () => {
  const [date, setDate] = React.useState(dayjs());

  const [showPicker, setShowPicker] = React.useState(false);

  const handleDateChange = (selectedDate) => {
    console.log(selectedDate);
    if (selectedDate) {
      setDate(selectedDate);
    }
    setShowPicker(false); // Close the picker when a date is chosen
  };

  const [formData, setFormData] = React.useState({
    name: "",
    age: "",
    gender: "",
    cancer_acquired_date: "",
    email: "",
    phone: "",
    address: "",
    date_of_birth: "",
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission here

    if (!isValidEmail(formData.email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    if (!isValidPhoneNumber(formData.phone)) {
      Alert.alert(
        "Invalid Phone Number",
        "Please enter a valid 11-digit phone number."
      );
      return;
    }
    console.log("Form Data:", formData);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    console.log(phoneNumber);
    const phoneRegex = /^\d{11}$/;
    return phoneRegex.test(phoneNumber);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={false}
      contentContainerStyle={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 70,
        }}
      >
        <View>
          <Image
            contentFit="cover"
            style={{
              width: 70,
              height: 70,
            }}
            source={require("../assets/patientremovebgpreview-1.png")}
            alt="photo"
          />
          <Text>Add Patient</Text>
        </View>
        <View style={STYLE.addPatientItem} />
        <View style={{ gap: 5 }}>
          <View>
            <Text style={{ fontSize: 15, marginBottom: 2 }}>Name</Text>
            <TextInput
              style={STYLE.box}
              value={formData.name}
              onChangeText={(text) => handleChange("name", text)}
              placeholder="Enter Patient Name"
            />
          </View>
          <View>
            <Text style={{ fontSize: 15, marginBottom: 2 }}>Age</Text>
            <TextInput
              keyboardType="numeric"
              style={STYLE.box}
              value={formData.age}
              onChangeText={(text) => handleChange("age", text)}
              placeholder="Enter Patient Age"
            />
          </View>
          <View>
            <Text style={{ fontSize: 15, marginBottom: 2 }}>Gender</Text>
            <TextInput
              style={STYLE.box}
              value={formData.gender}
              onChangeText={(text) => handleChange("gender", text)}
              placeholder="Enter Patient Gender"
            />
          </View>
          <View>
            <Text style={{ fontSize: 15, marginBottom: 2 }}>Phone</Text>
            <TextInput
              style={STYLE.box}
              value={formData.phone}
              onChangeText={(text) => handleChange("phone", text)}
              placeholder="Enter Patient Phone Number"
              keyboardType="phone-pad"
            />
          </View>
          <View>
            <Text style={{ fontSize: 15, marginBottom: 2 }}>Email</Text>
            <TextInput
              style={STYLE.box}
              value={formData.email}
              onChangeText={(text) => handleChange("email", text)}
              placeholder="Enter Patient Email"
              keyboardType="email-address"
            />
          </View>
          <View>
            <Text style={{ fontSize: 15, marginBottom: 2 }}>Date</Text>
            <TextInput
              style={STYLE.box}
              value={formData.cancer_acquired_date}
              onChangeText={(text) =>
                handleChange("cancer_acquired_date", text)
              }
              placeholder="Enter Cancer Detection Date"
            />
          </View>
          <View>
            <Text style={{ fontSize: 15, marginBottom: 2 }}>Date of Birth</Text>
            {/* <TextInput
              style={STYLE.box}
              value={formData.date_of_birth}
              onChangeText={(text) => handleChange("date_of_birth", text)}
              placeholder="Enter Date of Birth"
            />
             */}
            <View>
              <Button title="Select Date" onPress={() => setShowPicker(true)} />
              <Modal
                animationType="slide"
                transparent={true}
                visible={showPicker}
                onRequestClose={() => setShowPicker(false)}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <DateTimePicker
                      mode="date"
                      value={date}
                      timePicker={true}
                      onChange={({ date }) => console.log(date)}
                    />
                  </View>
                </View>
              </Modal>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 15, marginBottom: 2 }}>Address</Text>
            <TextInput
              style={STYLE.box}
              value={formData.address}
              onChangeText={(text) => handleChange("address", text)}
              placeholder="Enter Address"
            />
          </View>
          <View>
            <Pressable
              onPress={handleSubmit}
              style={{
                backgroundColor: Color.colorForestgreen_200,
                padding: 10,
                borderRadius: 5,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Click Me
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    elevation: 5, // Set elevation to ensure it appears above other components
  },
});
const STYLE = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  box: {
    height: 35,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  addPatientItem: {
    height: "5.26%",
    top: "4%",
    right: "0%",
    bottom: "94.74%",
    left: "0%",
    backgroundColor: Color.colorForestgreen_200,
    position: "absolute",
    width: "100%",
  },
});

export default AddPatient;
