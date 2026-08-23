// Reusable news/article card component. 
// Currently receives mock data via props from lib/mockData.ts. 
// Will later receive real articles from "fetch articles by city" query. 

import { View, Text, Pressable } from "react-native"; 

type NewsCardProps = { 
    headline: string; 
    source: string; 
    date: string; 
    topic: string; 
}; 

export default function NewsCard(props: NewsCardProps) { 
    return ( 
        <Pressable className="bg-white rounded-card p-4 mb-3 border border-border"> 
            <Text className="font-bold text-base" numberOfLines={2}> 
                {props.headline} 
            </Text> 
            <View className="flex-row justify-between mt-2"> 
                <Text className="text-xs text-gray-500"> 
                    {props.source} · {props.date} 
                </Text> 
                <View className="bg-border rounded-pill px-2 py-1"> 
                    <Text className="text-xs">{props.topic}</Text> 
                </View> 
            </View> 
        </Pressable> 
    ); 
} 
