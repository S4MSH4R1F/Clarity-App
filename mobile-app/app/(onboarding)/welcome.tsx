import { View, Text } from "react-native"; 
import Header from "../../components/Header"; 

export default function Welcome() { 
    return ( <View className="flex-1 bg-white"> 
    <Header title="Welcome to Clarity" /> 
    <View className="flex-1 items-center justify-center"> 
        <Text className="text-lg font-semibold">Welcome to Clarity</Text> 
        </View>
    </View> 
    ); 
} 

