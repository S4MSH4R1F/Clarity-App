import { View, Text } from "react-native"; 
import Header from "../../components/Header"; 
export default function Mission() { 
    return ( 
    <View className="flex-1 bg-white">
        <Header title="Our Mission" />
        <View className="flex-1 items-center justify-center">
            <Text className="text-lg font-semibold">Our Mission</Text>
            </View>
        </View> 
    ); 
} 