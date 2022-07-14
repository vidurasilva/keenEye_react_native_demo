import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Animated,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONTS, SIZES, icons, images } from "../constants";
import { isIphoneX } from "react-native-iphone-x-helper";
import React from "react";

function OrderDelivery({ route, navigation }) {
  const [restaurant, setRestaurants] = React.useState(null);
  const [streetName, setStreetName] = React.useState("");
  const [fromLocation, setFromLocation] = React.useState(null);
  const [toLocation, setToLocation] = React.useState(null);
  const [region, setRegion] = React.useState(null);

  React.useEffect(() => {
    let { restaurant, currentLocation } = route.params;
    let fromLoc = currentLocation.gps;
    let toLoc = restaurant.location;
    let street = currentLocation.streetName;

    let mapRegion = {
      latitude: (fromLoc.latitude + toLoc.latitude) / 2,
      longitude: (fromLoc.longitude + toLoc.longitude) / 2,
      latitudeDelta: Math.abs(fromLoc.latitude + toLoc.latitude) * 2,
      longitudeDelta: Math.abs(fromLoc.longitude + toLoc.longitude) * 2,
    };
    setRestaurants(restaurant);
    setStreetName(street);
    setFromLocation(fromLoc);
    setToLocation(toLoc);
    setRegion(mapRegion);
  });

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          ></Image>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 50,
              //   width: "70%",
              paddingHorizontal: SIZES.padding * 3,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.lightGray3,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ ...FONTS.h3 }}> Copy all text</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.list}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              justifyContent: "center",
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  return <SafeAreaView style={style.container}>{renderHeader()}</SafeAreaView>;
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
});
export default OrderDelivery;
