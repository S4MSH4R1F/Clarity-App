import { View, Text } from "react-native";
import Header from "../../components/Header";

export default function LocalNews() {
    return (
    <View className="flex-1 bg-white">
        <Header title="Local News" />
        <View className="flex-1 items-center justify-center">
            <Text className="text-lg font-semibold">Local News</Text>
        </View>
    </View>
    );
} 
