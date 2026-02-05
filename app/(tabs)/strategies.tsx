import { View, Text, ScrollView, SafeAreaView } from 'react-native';

export default function Strategies() {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <ScrollView className="flex-1 px-4 py-6">
                <Text className="text-2xl font-bold text-foreground mb-6">Investment Strategies</Text>
                <Text className="text-muted-foreground">Coming soon...</Text>
            </ScrollView>
        </SafeAreaView>
    );
}
