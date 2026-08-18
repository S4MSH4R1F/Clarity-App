import { View, Text } from "react-native";
import Header from "../../../components/Header";
export default function BillList() {
    return ( <View className="flex-1 bg-white">
        <Header title="Bills" />
        <View className="flex-1 items-center justify-center">
            <Text className="text-lg font-semibold">Bills</Text> 
        </View>
    </View>
    );
} 
