import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";

import colors from "./assets/Theme.js/colors";
import DrawerContent from "./commponents/DrawerContent";
import Profile from "./screens/Profile";
import History from "./screens/History";
import Receipt from "./screens/Receipt";
import Deposit from "./screens/Deposit";
import HelpAndSupport from "./screens/HelpAndSupport";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import MainNav from "./screens/MainNav";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
      {/* <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
          style={styles.container}
          screenOptions={{
            activeTintColor: "red",
            headerTransparent: false,
            headerTitleStyle: {
              color: "rgba(255,255,255,0.0)",
            },
            drawerItemStyle: {
              borderEndColor: "red",
            },
            drawerActiveTintColor: colors.primary,
            drawerActiveBackgroundColor: "#fff",
          }}
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="History" component={History} />
          <Drawer.Screen name="Receipt" component={Receipt} />
          <Drawer.Screen name="Deposit" component={Deposit} />
          <Drawer.Screen name="FAQ" component={HelpAndSupport} />
        </Drawer.Navigator>
      </NavigationContainer> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="MainNav"
            component={MainNav}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
