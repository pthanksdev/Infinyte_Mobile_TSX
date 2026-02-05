import { TextInput, TextInputProps, View, Text } from 'react-native';
import { cn } from '../../lib/utils';
import { useColorScheme } from 'nativewind';

interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
}

export function Input({ className, label, error, ...props }: InputProps) {
    const { colorScheme } = useColorScheme();
    const placeholderColor = colorScheme === 'dark' ? '#a1a1aa' : '#71717a';

    return (
        <View className="space-y-2">
            {label && <Text className="text-sm font-medium leading-none text-foreground native:text-base">{label}</Text>}
            <TextInput
                className={cn(
                    "flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground placeholder:text-muted-foreground",
                    error && "border-destructive",
                    className
                )}
                placeholderTextColor={placeholderColor}
                {...props}
            />
            {error && <Text className="text-sm font-medium text-destructive">{error}</Text>}
        </View>
    );
}
