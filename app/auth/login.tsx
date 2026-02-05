import { View, Text, Switch, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../components/ui/Card';
import { router } from 'expo-router';
import { Fingerprint } from 'lucide-react-native';

export default function Login() {
    const [email, setEmail] = useState('paulthanksgiving2@gmail.com');
    const [password, setPassword] = useState('pthanks123$');
    return (
        <SafeAreaView className="flex-1 bg-background">
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className="flex-1 justify-center px-6"
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                    <View className="mb-8 items-center">
                        <Text className="text-4xl font-bold text-primary mb-2">Infinyte</Text>
                        <Text className="text-muted-foreground text-center">
                            Welcome back to your private investment club.
                        </Text>
                    </View>

                    <Card className="bg-secondary/50 border-input">
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Input
                                placeholder="Email"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                value={email}
                                onChangeText={setEmail}
                            />
                            <Input
                                placeholder="Password"
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                            />
                            <View className="py-2 items-center">
                                <Fingerprint size={48} color="#22c55e" />
                                <Text className="text-xs text-muted-foreground mt-2">Biometric Login Enabled</Text>
                            </View>
                        </CardContent>
                        <CardFooter className="flex-col gap-4">
                            <Button
                                label="Sign In"
                                className="w-full"
                                onPress={() => router.replace('/(tabs)')}
                            />
                            <Button
                                label="Create Account"
                                variant="ghost"
                                className="w-full"
                                onPress={() => router.push('/auth/signup')}
                            />
                        </CardFooter>
                    </Card>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
