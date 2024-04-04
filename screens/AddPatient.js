import * as React from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AddPatient = () => {
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
    console.log("Form Data:", formData);
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
          />
        </View>
        <View>
          <Text style={{ fontSize: 15, marginBottom: 2 }}>Email</Text>
          <TextInput
            style={STYLE.box}
            value={formData.email}
            onChangeText={(text) => handleChange("email", text)}
            placeholder="Enter Patient Email"
            
          />
        </View>
        <View>
          <Text style={{ fontSize: 15, marginBottom: 2 }}>Date</Text>
          <TextInput
            style={STYLE.box}
            value={formData.cancer_acquired_date}
            onChangeText={(text) => handleChange("cancer_acquired_date", text)}
            placeholder="Enter Cancer Detection Date"
          />
        </View>
        <View>
          <Text style={{ fontSize: 15, marginBottom: 2 }}>Date of Birth</Text>
          <TextInput
            style={STYLE.box}
            value={formData.date_of_birth}
            onChangeText={(text) => handleChange("date_of_birth", text)}
            placeholder="Enter Date of Birth"
          />
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
          <Button
            title="Save"
            onPress={handleSubmit}
            style={{ backgroundColor: "green" }}
          ></Button>
        </View>
      </View>
    </View>
  );
};

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
    top: "0%",
    right: "0%",
    bottom: "94.74%",
    left: "0%",
    backgroundColor: Color.colorForestgreen_200,
    position: "absolute",
    width: "100%",
  },
});

export default AddPatient;
