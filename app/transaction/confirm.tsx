import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { router } from 'expo-router';
import { PenTool } from 'lucide-react-native';

export default function ConfirmTransaction() {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="flex-1 px-6 justify-center">
                <Card className="bg-secondary/50">
                    <CardHeader>
                        <CardTitle className="text-center">Confirm Transaction</CardTitle>
                    </CardHeader>
                    <CardContent className="items-center space-y-6">
                        <Text className="text-muted-foreground text-center">
                            Please digitally sign below to authorize the transfer of $5,000 to "Growth Fund A".
                        </Text>

                        <View className="h-40 w-full bg-background border border-dashed border-muted rounded-md items-center justify-center">
                            <PenTool size={32} color="#71717a" />
                            <Text className="text-xs text-muted-foreground mt-2">Tap to Sign</Text>
                        </View>

                        <View className="flex-row gap-4 w-full">
                            <Button
                                label="Cancel"
                                variant="outline"
                                className="flex-1"
                                onPress={() => router.back()}
                            />
                            <Button
                                label="Authorize"
                                className="flex-1"
                                onPress={() => router.back()} // Mock success
                            />
                        </View>
                    </CardContent>
                </Card>
            </View>
        </SafeAreaView>
    );
}
