import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router"; 
import Header from "../../../components/Header";

export default function BillDetail() {
    const { id } = useLocalSearchParams();
    
    return ( <View className="flex-1 bg-white">
        <Header title="Bill Detail" />
        <View className="flex-1 items-center justify-center">
            <Text className="text-lg font-semibold">Bill Detail</Text>
            <Text className="text-sm text-gray-500 mt-2">Bill ID: {id}</Text>
        </View>
    </View>
    ); 
} 
