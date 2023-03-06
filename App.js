import { StatusBar } from "expo-status-bar";
import React, { useEffect, useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Providers from "./navigation";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import ReduxThunk from "redux-thunk";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer for a long period of time"]);

const fetchFonts = async () => {
  await Font.loadAsync({
    aliens: require("./assets/fonts/aliens.ttf"),
    "Kufam-SemiBoldItalic": require("./assets/fonts/Kufam-SemiBoldItalic.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-BoldItalic": require("./assets/fonts/Lato-BoldItalic.ttf"),
    "Lato-Italic": require("./assets/fonts/Lato-Italic.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    if (!fontLoaded) {
      async function prepare() {
        try {
          console.log("started");
          // Keep the splash screen visible while we fetch resources
          await SplashScreen.preventAutoHideAsync();
          // Pre-load fonts, make any API calls you need to do here
          await fetchFonts();
        } catch (e) {
          console.warn(e);
        } finally {
          console.log("loaded");
          // Tell the application to render
          setFontLoaded(true);
        }
      }

      prepare();
    }
    if (fontLoaded) {
      async function onLayoutRootView() {
        // This tells the splash screen to hide immediately! If we call this after
        // `setAppIsReady`, then we may see a blank screen while the app is
        // loading its initial state and rendering its first pixels. So instead,
        // we hide the splash screen once we know the root view has already
        // performed layout.
        await SplashScreen.hideAsync();
      }

      onLayoutRootView();
    }
  }, [fontLoaded]);

  return (
    // <Provider>
    <Providers />
    // </Provider>
  );
}
