// Reusable bill card component
// Currently receives mock data via props from lib/mockData.ts. 
// Will later receive real bill records from Supabase query. 

import { View, Text, Pressable } from "react-native"; 
import { router } from "expo-router"; 

type BillCardProps = { 
    id: string; 
    billNumber: string; 
    title: string; 
    status: string; 
    topic: string; 
    readTime: string; 
    source: string; 
}; 

export default function BillCard(props: BillCardProps) { 
    return (
         <Pressable onPress={() => router.push(`/(tabs)/bills/${props.id}`)} 
         className="bg-cardbg rounded-card p-4 mb-3 mr-3 w-64 border border-border" > 
         
        <Text className="text-xs text-primary font-semibold">{props.billNumber}</Text>
        <Text className="text-base font-bold mt-1" numberOfLines={2}> 
            {props.title} 
        </Text> 
        <View className="flex-row items-center mt-2 flex-wrap"> 
            <View className="bg-accent rounded-pill px-2 py-1 mr-2"> 
                <Text className="text-xs font-medium">{props.status}
                </Text> 
                </View> 
                <View className="bg-border rounded-pill px-2 py-1 mr-2"> 
                    <Text className="text-xs">{props.topic} </Text> 
                </View> 
            </View> 
            <View className="flex-row justify-between mt-2"> 
                <Text className="text-xs text-gray-500">{props.readTime}</Text> 
                <Text className="text-xs text-gray-500">{props.source}</Text> 
            </View> 
        </Pressable> 
    ); 
} 
