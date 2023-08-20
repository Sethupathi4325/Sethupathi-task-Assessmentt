import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
} from "react-native-vector-icons";
import { TouchableOpacity } from "react-native-web";
//import { Navigation } from 'react-native-navigation';
import { useNavigation } from "@react-navigation/native";
const color = " orange";
import Model from "./Model";
import Trip from "./Trip";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Text>Profile Settings</Text> */}
      <View style={styles.outerContainer}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
          }}
        />
        <Text
          style={{
            marginLeft: 80,
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          {" "}
          John Mathew{" "}
        </Text>
      </View>
      <Text style={styles.text1}>+9876543210 </Text>
      <Text style={styles.text}>joedyson@gmail.com</Text>
      <View style={styles.field}>
        <Text style={{ margin: 20, fontSize: 20 }}>Favourite Places</Text>
        <View style={styles.info}>
          <Entypo
            style={{ marginLeft: 200 }}
            name="home"
            size={20}
            color={color}
          />
          <Text style={{ marginLeft: 200 }}>Home</Text>
          <Text>Anna salai Street</Text>
          <TouchableOpacity>
            <Text
              style={{
                marginLeft: 500,
                borderWidth: 2,
                borderRadius: 20,
                width: 120,
                padding: 10,
                height: 40,
                textAlign: "center",
                borderColor: "violet",
                color: "violet",
              }}
            >
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.info}>
          <FontAwesome
            style={{ marginLeft: 200 }}
            name="shopping-bag"
            size={20}
            color={color}
          />
          <Text style={{ marginLeft: 200 }}>Work </Text>
          <Text>Anna salai Street</Text>

          <TouchableOpacity>
            <Text
              style={{
                marginLeft: 500,
                borderWidth: 2,
                borderRadius: 20,
                width: 120,
                padding: 10,
                height: 40,
                textAlign: "center",
                borderColor: "violet",
                color: "violet",
              }}
            >
              Edit
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={navigation.navigate("Trip")}>
          <Text style={{ margin: 10, textAlign: "center", marginTop: 20 }}>
            +Add New place{" "}
          </Text>
        </TouchableOpacity>
        <View style={styles.log}>
          <Entypo name="log-out" size={20} color={color} />
          <Text> LogOut</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    height: 240,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  outerContainer: {
    //backgroundColor:'skyblue',
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    padding: 60,
    margin: 20,
  },
  tinyLogo: {
    width: 80,
    height: 80,
    borderRadius: 90,
    marginLeft: 20,
  },
  text: {
    fontSize: 20,
    //fontWeight:'bold',
    marginLeft: 250,
  },
  text1: {
    fontSize: 20,
    //fontWeight:'bold',
    marginLeft: 250,
  },
  field: {
    height: 230,
    width: 1400,
    margin: 30,
    //backgroundColor:'blue',
    marginLeft: 60,
    borderBottomWidth: 2,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  log: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
  },
});
