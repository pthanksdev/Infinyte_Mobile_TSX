import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, CardContent } from '../../components/ui/Card';

export default function Portfolio() {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <ScrollView className="flex-1 px-4 py-6">
                <Text className="text-2xl font-bold text-foreground mb-6">Your Portfolio</Text>
                <View className="flex-row flex-wrap gap-4">
                    <Card className="flex-1 min-w-[150px] bg-secondary border-none p-4">
                        <Text className="text-muted-foreground">Mutual Funds</Text>
                        <Text className="text-xl font-bold text-foreground mt-1">$12,400</Text>
                    </Card>
                    <Card className="flex-1 min-w-[150px] bg-secondary border-none p-4">
                        <Text className="text-muted-foreground">Stocks</Text>
                        <Text className="text-xl font-bold text-foreground mt-1">$8,250</Text>
                    </Card>
                    <Card className="flex-1 min-w-[150px] bg-secondary border-none p-4">
                        <Text className="text-muted-foreground">Gold</Text>
                        <Text className="text-xl font-bold text-foreground mt-1">$3,912</Text>
                    </Card>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
