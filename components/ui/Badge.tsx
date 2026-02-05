import { View, Text, ViewProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
    "items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
    {
        variants: {
            variant: {
                default: "border-transparent bg-primary",
                secondary: "border-transparent bg-secondary",
                destructive: "border-transparent bg-destructive",
                outline: "text-foreground border-border", // Added border-border
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

interface BadgeProps extends ViewProps, VariantProps<typeof badgeVariants> { }

export function Badge({ className, variant, children, ...props }: BadgeProps) {
    return (
        <View className={cn(badgeVariants({ variant }), className)} {...props}>
            {typeof children === 'string' ? (
                <Text className={cn("text-xs font-semibold",
                    variant === 'outline' && "text-foreground",
                    variant === 'secondary' && "text-secondary-foreground",
                    variant === 'destructive' && "text-destructive-foreground",
                    variant === 'default' && "text-black" // primary is green-500, black text is legible
                )}>
                    {children}
                </Text>
            ) : (
                children
            )}
        </View>
    );
}
