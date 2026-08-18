import { View, Text } from "react-native";
import Header from "../../components/Header";
export default function Profile() {
    return (
    <View className="flex-1 bg-white">
        <Header title="Your Profile" />
        <View className="flex-1 items-center justify-center">
            <Text className="text-lg font-semibold">Your Profile</Text>
        </View>
    </View>
    );
}