import { Tabs } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { View } from 'react-native';
import { LayoutDashboard, PieChart, TrendingUp, ArrowRightLeft } from 'lucide-react-native';
import { cn } from '../../lib/utils';

export default function TabLayout() {
    const { colorScheme } = useColorScheme();
    const iconColor = colorScheme === 'dark' ? '#fafafa' : '#09090b';

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#09090b', // bg-background
                    borderTopColor: '#27272a', // border-border
                },
                tabBarActiveTintColor: '#22c55e', // primary
                tabBarInactiveTintColor: '#71717a', // muted-foreground
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Dashboard",
                    tabBarIcon: ({ color }) => <LayoutDashboard size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="portfolio"
                options={{
                    title: "Portfolio",
                    tabBarIcon: ({ color }) => <PieChart size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="strategies"
                options={{
                    title: "Strategies",
                    tabBarIcon: ({ color }) => <TrendingUp size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="transactions"
                options={{
                    title: "Transactions",
                    tabBarIcon: ({ color }) => <ArrowRightLeft size={24} color={color} />,
                }}
            />
        </Tabs>
    );
}
