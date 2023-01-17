import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

import Home from "./screens/Home";
import Calendar from "./screens/Calendar";
import Library from "./screens/Library";
import MyPage from "./screens/MyPage";

export default function App() {
  const BottomTab = createBottomTabNavigator();

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
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
          <BottomTab.Screen name="Home" component={Home} />
          <BottomTab.Screen name="Calendar" component={Calendar} />
          <BottomTab.Screen name="Library" component={Library} />
          <BottomTab.Screen name="MyPage" component={MyPage} />
        </BottomTab.Navigator>
      </NavigationContainer>
    </View>
  );
}
