type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
	variant?: ButtonVariant;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  width?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
	primary: 'bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90',
  secondary: 'bg-transparent hover:bg-[var(--sidebar-accent)] text-[var(--sidebar-foreground)] border border-[var(--sidebar-border)]',
  tertiary: 'bg-transparent text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] border border-[var(--sidebar-border)] '
}

export default function Button({ children, variant = 'primary', type = 'button', className, width = 'full', ...rest }: ButtonProps) {
  return (
    <button type={type} {...rest} className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none h-9 px-4 py-2 w-${width} cursor-pointer ${variantClasses[variant]} ${className}`}>
      {children}
    </button>
  );
}
