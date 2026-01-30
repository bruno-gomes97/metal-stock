import type { JSX, ReactNode } from 'react';

type TextVariant = 'xl' | 'lg' | 'sm' | 'xs';

interface TextProps {
  children: ReactNode;
  variant?: TextVariant;
  className?: string;
}

const variantClasses: Record<TextVariant, string> = {
  xl: 'text-2xl font-bold',
  lg: 'text-lg font-bold',
  sm: 'text-sm font-medium',
  xs: 'text-xs'
};

const variantElement: Record<TextVariant, keyof JSX.IntrinsicElements> = {
  xl: 'h1',
  lg: 'h3',
  sm: 'p',
  xs: 'p',
};

export default function Text({ children, variant = 'lg', className }: TextProps) {
  const Component = variantElement[variant];

  return <Component className={`${variantClasses[variant]}${className ? ` ${className}` : ''}`}>{children}</Component>;
}
