import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createMaterialTopTabNavigator();
const Tab2 = createMaterialTopTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "space-evenly" }}
    >
      <Button
        title="Open User Settings"
        onPress={() => navigation.navigate("User")}
      />
      <Button
        title="Open App  Settings"
        onPress={() => navigation.navigate("App")}
      />
    </View>
  );
}

function User({ navigation }) {
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "space-evenly" }}
    >
      <Text>User Setting</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home1")} />
    </View>
  );
}
function AppS({ navigation }) {
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "space-evenly" }}
    >
      <Text>App Setting</Text>

      <Button title="Home" onPress={() => navigation.navigate("Home1")} />
    </View>
  );
}

function SettingsScreen() {
  return (
    <Tab2.Navigator>
      <Tab2.Screen name="User" component={User} />
      <Tab2.Screen name="App" component={AppS} />
    </Tab2.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Text style={{ fontSize: 30, paddingLeft: 10 }}>TabExample</Text>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home">
          {() => (
            <HomeStack.Navigator screenOptions={{ headerShown: false }}>
              <HomeStack.Screen name="Home1" component={HomeScreen} />
              <HomeStack.Screen name="User" component={User} />
              <HomeStack.Screen name="App" component={AppS} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
