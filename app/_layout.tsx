import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useColorScheme } from "nativewind";
import "../tailwind.css";

export default function Layout() {
    const { colorScheme } = useColorScheme();

    return (
        <View style={{ flex: 1 }}>
            <Stack screenOptions={{ headerShown: false }} />
            <StatusBar style="light" />
        </View>
    );
}
