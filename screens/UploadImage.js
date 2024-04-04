import React from "react";
import { StyleSheet, View, Text, Pressable, Button } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import SelectDropdown from "react-native-select-dropdown";
import * as ImagePicker from "expo-image-picker";

const models = ["REZNET", "DL"];
const UploadImage = () => {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = React.useState("");
  const [selectedImage, setSelectedImage] = React.useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result.assets[0].uri);
    setSelectedImage(result.assets[0].uri);
  };

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 40,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SelectDropdown
        data={models}
        onSelect={(selectedItem, index) => {
          setSelectedValue(selectedItem);
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={STYLE.dropdownButtonStyle}>
              <Text style={STYLE.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem) || "Select your mood"}
              </Text>
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={{
                ...STYLE.dropdownItemStyle,
                ...(isSelected && { backgroundColor: "#D2D9DF" }),
              }}
            >
              <Text style={STYLE.dropdownItemTxtStyle}>{item}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={STYLE.dropdownMenuStyle}
      ></SelectDropdown>
      <View>
        <Text>
          System requires you to upload skin image for Cancer Detection. Don't
          worry, your data will stay safe and private.
        </Text>
      </View>
      <View>
        <Text
          style={STYLE.uploadAPhotoClr}
        >{`Upload a photo of your Skin Lesion `}</Text>
      </View>
      <View style={STYLE.container}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
      </View>
      <Button title="Upload" style={{ width: 200 }}></Button>
    </View>
  );
};

const STYLE = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  dropdownButtonStyle: {
    width: 300,
    height: 50,
    backgroundColor: Color.colorDarkgreen,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  uploadAPhotoClr: {
    color: Color.colorDarkgreen,
    fontFamily: FontFamily.poppinsRegular,
  },
});

export default UploadImage;
