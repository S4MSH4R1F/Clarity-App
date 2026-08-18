import { View, Text } from "react-native";
import Header from "../../../components/Header";

export default function MppFinder() {
    return ( 
    <View className="flex-1 bg-white">
        <Header title="Find Your MPP" />
        <View className="flex-1 items-center justify-center">
            <Text className="text-lg font-semibold">Find Your MPP</Text>
        </View>
    </View>
    ); 
} 