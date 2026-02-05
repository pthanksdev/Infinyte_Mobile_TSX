import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Bell, Search, User } from 'lucide-react-native';

export default function Dashboard() {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <ScrollView className="flex-1 px-4 py-6">
                {/* Header */}
                <View className="flex-row items-center justify-between mb-8">
                    <View>
                        <Text className='text-muted-foreground text-sm'>Welcome back,</Text>
                        <Text className="text-foreground text-xl font-bold">Alexander</Text>
                    </View>
                    <View className="flex-row gap-4">
                        <Search size={24} color="#fafafa" />
                        <Bell size={24} color="#fafafa" />
                        <View className="h-8 w-8 rounded-full bg-secondary items-center justify-center">
                            <User size={16} color="#fafafa" />
                        </View>
                    </View>
                </View>

                {/* Detailed Analysis Card */}
                <Card className="mb-6 bg-secondary border-none">
                    <CardHeader>
                        <CardTitle>Detailed Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <View className="flex-row items-baseline gap-2">
                            <Text className="text-4xl font-bold text-foreground">$24,562.00</Text>
                            <Badge variant="default" className="bg-primary/20">
                                <Text className="text-primary">+12.5%</Text>
                            </Badge>
                        </View>
                        <Text className="text-muted-foreground mt-2">Total Portfolio Value</Text>
                        <View className="mt-4 flex-row gap-2">
                            <Button size="sm" variant="default" label="Invest" />
                            <Button size="sm" variant="outline" label="Withdraw" />
                        </View>
                    </CardContent>
                </Card>

                {/* Recent Activity / Top Funds Section */}
                <Text className="text-xl font-bold text-foreground mb-4">Top Performing Funds</Text>
                <Card className="mb-4">
                    <CardHeader>
                        <CardTitle className="text-lg">Quant Small Cap Fund</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <View className="flex-row justify-between">
                            <Text className="text-muted-foreground">Return (1Y)</Text>
                            <Text className="text-primary font-bold">+45.2%</Text>
                        </View>
                    </CardContent>
                </Card>
                <Card className="mb-4">
                    <CardHeader>
                        <CardTitle className="text-lg">Nippon India Small Cap</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <View className="flex-row justify-between">
                            <Text className="text-muted-foreground">Return (1Y)</Text>
                            <Text className="text-primary font-bold">+38.7%</Text>
                        </View>
                    </CardContent>
                </Card>

            </ScrollView>
        </SafeAreaView>
    );
}
