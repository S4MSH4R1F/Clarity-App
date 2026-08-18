import { View, Text } from "react-native";
import Header from "../components/Header";

export default function Paywall() { 
    return ( <View className="flex-1 bg-white">
        <Header title="Clarity Premium" />
        <View className="flex-1 items-center justify-center">
            <Text className="text-lg font-semibold">Clarity Premium</Text>
        </View>
    </View>
    );
} 
