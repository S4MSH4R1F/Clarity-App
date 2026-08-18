import { View, Text } from "react-native";
import Header from "../../components/Header";

export default function Home() {
  return ( <View className="flex-1 bg-white">
    <Header title="Home" />
    <View className="flex-1 items-center justify-center">
      <Text className="text-lg font-semibold">Home</Text>
      </View>
    </View>
  );
} 