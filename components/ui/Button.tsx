import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
    "flex-row items-center justify-center rounded-md",
    {
        variants: {
            variant: {
                default: "bg-primary",
                destructive: "bg-destructive",
                outline: "border border-input bg-transparent",
                secondary: "bg-secondary",
                ghost: "bg-transparent",
                link: "text-primary underline-offset-4",
            },
            size: {
                default: "h-12 px-4 py-3",
                sm: "h-9 rounded-md px-3",
                lg: "h-14 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

interface ButtonProps
    extends TouchableOpacityProps,
    VariantProps<typeof buttonVariants> {
    label?: string;
    labelClassName?: string;
}

export function Button({ className, variant, size, label, children, labelClassName, ...props }: ButtonProps) {
    return (
        <TouchableOpacity
            className={cn(buttonVariants({ variant, size, className }))}
            activeOpacity={0.8}
            {...props}
        >
            {label ? (
                <Text className={cn("text-base font-medium",
                    variant === 'default' && "text-primary-foreground",
                    variant === 'destructive' && "text-destructive-foreground",
                    variant === 'outline' && "text-foreground",
                    variant === 'secondary' && "text-secondary-foreground",
                    variant === 'ghost' && "text-foreground",
                    variant === 'link' && "text-primary",
                    labelClassName
                )}>
                    {label}
                </Text>
            ) : (
                children
            )}
        </TouchableOpacity>
    );
}
