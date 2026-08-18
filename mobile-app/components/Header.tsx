import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type HeaderProps = {
    title?: string;
};

export default function Header({ title }: HeaderProps) {
    return (
        <SafeAreaView className="bg-primary">
            <View className="flex-row items-center px-4 py-3">
                {/* Replace with actual spark icon asset fromFigma export */}
                <Text className="text-accent text-x1 mr-2">✦</Text>
                <Text className="text-white text-lg font-bold">
                    {title ?? "CLARITY"}
                    </Text>
            </View>
        </SafeAreaView>
    );
}