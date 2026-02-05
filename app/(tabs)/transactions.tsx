import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Transactions() {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <ScrollView className="flex-1 px-4 py-6">
                <Text className="text-2xl font-bold text-foreground mb-6">Transactions</Text>
                <Text className="text-muted-foreground">No recent transactions.</Text>
            </ScrollView>
        </SafeAreaView>
    );
}
