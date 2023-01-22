import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import CalendarScreen from "./screens/CalendarScreen";
import LibraryScreen from "./screens/LibraryScreen";
import MyPageScreen from "./screens/MyPageScreen";

export default function App() {
  const BottomTab = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color }) => {
              switch (route.name) {
                case "Home":
                  return <Ionicons name="home-sharp" size={24} color={color} />;
                case "Calendar":
                  return (
                    <MaterialCommunityIcons
                      name="calendar-month-outline"
                      size={24}
                      color={color}
                    />
                  );
                case "Library":
                  return <Ionicons name="barbell" size={24} color={color} />;
                case "MyPage":
                  return (
                    <SimpleLineIcons name="user" size={24} color={color} />
                  );
              }
            },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <BottomTab.Screen name="Home" component={HomeScreen} />
          <BottomTab.Screen name="Calendar" component={CalendarScreen} />
          <BottomTab.Screen name="Library" component={LibraryScreen} />
          <BottomTab.Screen name="MyPage" component={MyPageScreen} />
        </BottomTab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
});
