import { View, Text } from "react-native";
import Header from "../../../components/Header";

export default function MppProfile() {
    return ( 
    <View className="flex-1 bg-white">
        <Header title="MPP Profile" />
        <View className="flex-1 items-center justify-center">
            <Text className="text-lg font-semibold">MPP Profile</Text>
        </View> 
    </View>
    );
} 
