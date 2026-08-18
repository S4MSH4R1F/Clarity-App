import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../lib/theme";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ 
      headerShown: false,
      tabBarActiveTintColor: colors.accentYellow,
      tabBarInactiveTintColor: colors.white,
      tabBarStyle: { backgroundColor: colors.primaryBlue },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
      name="mpp/index" 
      options={{ 
        title: "MPPs", 
        tabBarIcon: ({ color, size }: { color: string; size: number }) => ( 
            <Ionicons name="people" size={size} color={color} /> 
          ), 
        }} 
      /> 
      
      <Tabs.Screen 
      name="bills/index" 
      options={{ 
        title: "Bills", 
        tabBarIcon: ({ color, size }: { color: string; size: number }) => ( 
          <Ionicons name="document-text" size={size} color={color} /> 
          ), 
        }} 
      /> 
      
      <Tabs.Screen 
      name="profile" 
      options={{ 
        title: "Profile", 
          tabBarIcon: ({ color, size }: { color: string; size: number }) => ( 
            <Ionicons name="person" size={size} color={color} /> 
          ), 
        }} 
      /> 
    </Tabs> 
  ); 
} 