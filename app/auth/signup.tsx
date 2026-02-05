import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../components/ui/Card';
import { router } from 'expo-router';

export default function Signup() {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className="flex-1 justify-center px-6"
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                    <View className="mb-8 items-center">
                        <Text className="text-3xl font-bold text-foreground">Join the Club</Text>
                    </View>

                    <Card className="bg-secondary/50 border-input">
                        <CardHeader>
                            <CardTitle>Sign Up</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Input placeholder="Full Name" />
                            <Input placeholder="Email" keyboardType="email-address" />
                            <Input placeholder="Password" secureTextEntry />
                            <Input placeholder="Confirm Password" secureTextEntry />
                        </CardContent>
                        <CardFooter className="flex-col gap-4">
                            <Button
                                label="Create Account"
                                className="w-full"
                                onPress={() => router.replace('/(tabs)')}
                            />
                            <Button
                                label="Already have an account?"
                                variant="ghost"
                                className="w-full"
                                onPress={() => router.back()}
                            />
                        </CardFooter>
                    </Card>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
