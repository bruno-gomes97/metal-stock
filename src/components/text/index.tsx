import type { JSX, ReactNode } from 'react';

type TextVariant = 'lg' | 'sm' | 'xs';

interface TextProps {
  children: ReactNode;
  variant?: TextVariant;
  className?: string;
}

const variantClasses: Record<TextVariant, string> = {
  lg: 'text-2xl font-bold ',
  sm: 'text-sm',
  xs: 'text-xs'
};

const variantElement: Record<TextVariant, keyof JSX.IntrinsicElements> = {
  lg: 'h1',
  sm: 'p',
  xs: 'p',
};

export default function Text({ children, variant = 'lg', className }: TextProps) {
  const Component = variantElement[variant];

  return <Component className={`${variantClasses[variant]}${className ? ` ${className}` : ''}`}>{children}</Component>;
}
