import { View, Text } from "react-native";
import Header from "../../components/Header";

export default function CityInput() {
    return ( <View className="flex-1 bg-white">
        <Header title="What's your city or postal code?" />
        <View className="flex-1 items-center justify-center">
            <Text className="text-lg font-semibold">What's your city or postal code?</Text>
            </View>
        </View>
    );
} 
