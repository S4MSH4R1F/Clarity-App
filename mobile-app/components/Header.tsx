import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type HeaderProps = { 
    title?: string; 
};

export default function Header({ title }: HeaderProps) { 
    return (
    <SafeAreaView className="bg-primary">
        <View className="flex-row items-center px-4 py-3">
            {/* Replace with the actual spark icon asset from Figma export */}
            <Text className="text-white text-lg font-bold"> {"CLARITY"}</Text>
            <Text className="text-accent text-xl mr-2">✦</Text>
            <Text className="text-white text-sm px-4 pb-2">{title}</Text>
        </View>
    </SafeAreaView>
    );
} 
