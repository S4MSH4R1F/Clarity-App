// Reusable MPP card component. 
// Currently receives mock data via props from lib/mockData.ts. 
// Will later receive real MPP records from "fetch MPP by riding" query. 

import { View, Text, Image, Pressable } from "react-native"; 
import { router } from "expo-router"; 

type MPPCardProps = { 
    id: string; 
    name: string; 
    party: string; 
    riding: string; 
    photoUrl: string; 
}; 

export default function MPPCard(props: MPPCardProps) {
    return ( 
    <Pressable onPress={() => router.push(`/(tabs)/mpp/profile?id=${props.id}`)}
    className="bg-primary rounded-card p-4 flex-row items-center" > 
    
    <Image source={{ uri: props.photoUrl }} className="w-16 h-16 rounded-full mr-4" />
    <View className="flex-1"> <Text className="text-white font-bold text-base">{props.name}</Text>
        <Text className="text-white text-sm">{props.party}</Text> 
        <Text className="text-accent text-sm">{props.riding}</Text> 
    </View> 
    </Pressable> 
    ); 
} 
