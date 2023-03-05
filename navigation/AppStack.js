import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PromoDetailScreen from "../screens/PromoDetailScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import EditEvalScreen from "../screens/EditEvalScreen";
import EvalScreen from "../screens/EvalScreen";
import InformationScreen from "../screens/InformationScreen";
import Colors from "../constants/Colors";
import QrScreen from "../screens/QrScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DetailsScreen from "../screens/DetailsScreen";
import VideoScreen from "../screens/VideoScreen";
import ReviewScreen from "../screens/ReviewScreen";
import NotificationScreen from "../screens/NotificationScreen";
import AwardsScreen from "../screens/AwardsScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

let routeName;
const AppStack = () => {
  // const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  // useEffect(() => {
  //   AsyncStorage.getItem("alreadyLaunched").then((value) => {
  //     if (value == null) {
  //       AsyncStorage.setItem("alreadyLaunched", "true"); // No need to wait for `setItem` to finish, although you might want to handle errors
  //       setIsFirstLaunch(true);
  //     } else {
  //       setIsFirstLaunch(false);
  //     }
  //   }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
  // }, []);

  // if (isFirstLaunch === null) {
  //   return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  // } else if (isFirstLaunch == true) {
  //   routeName = "Onboarding";
  // } else {
  //   routeName = "Home";
  // }
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors.noExprimary,
      }}
      style={{ backgroundColor: "blue" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Icon name="ios-home" color={color} size={30} />
            ) : (
              <Icon name="ios-home" color={color} size={26} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color }) => (
            <Icon name="person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Information"
        component={InformationStack}
        options={{
          tabBarLabel: "Informacion",
          tabBarIcon: ({ color }) => (
            <Icon name="information-circle" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Logros"
        component={AwardsStack}
        options={{
          tabBarLabel: "Logros",
          tabBarIcon: ({ color }) => (
            <Icon name="trophy" color={color} size={26} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Configuraciones",
          tabBarIcon: ({ color }) => (
            <Icon name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Onboarding"
      component={OnboardingScreen}
      options={{
        title: "Niveles",
      }}
    />
    <Stack.Screen
      name="Section"
      component={SectionScreen}
      options={{
        title: "Niveles",
      }}
    />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        title: "Niveles",
      }}
    />
    <Stack.Screen
      name="Video"
      component={VideoScreen}
      options={{
        title: "Niveles",
      }}
    />
    <Stack.Screen
      name="Review"
      component={ReviewScreen}
      options={{
        headerShown: false,
        // title: "Niveles",
      }}
    />
    <Stack.Screen
      name="Qr"
      component={QrScreen}
      options={{
        title: "Codigo Qr",
      }}
    />
    <Stack.Screen
      name="Notification"
      component={NotificationScreen}
      options={({ navigation }) => ({
        title: "Notificaciones",
        headerShown: true,
      })}
    />
    <Stack.Screen
      name="Edit"
      component={EditProfileScreen}
      options={{
        title: "Editar Perfil",
      }}
    />
  </Stack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={({ navigation }) => ({
        title: "",
        headerShown: false,
      })}
    />
    <Stack.Screen
      name="Edit"
      component={EditProfileScreen}
      options={{
        title: "Editar Perfil",
      }}
    />
    <Stack.Screen
      name="Eval"
      component={EvalScreen}
      options={{
        title: "Evaluacion",
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Edit Eval"
      component={EditEvalScreen}
      options={{
        title: "Editar Evaluacion",
        headerShown: true,
      }}
    />
  </Stack.Navigator>
);
const AwardsStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Awards"
      component={AwardsScreen}
      options={{
        title: "Logros",
      }}
    />
  </Stack.Navigator>
);
const InformationStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Information"
      component={InformationScreen}
      options={({ navigation }) => ({
        title: "Informacion",
        headerShown: true,
      })}
    />
    <Stack.Screen
      name="PromoDetail"
      component={PromoDetailScreen}
      options={({ navigation }) => ({
        title: "Detalles",
        headerShown: true,
      })}
    />
  </Stack.Navigator>
);

export default AppStack;
