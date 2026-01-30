type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
	variant?: ButtonVariant;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
	primary: 'bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90',
  secondary: 'bg-transparent hover:bg-[var(--sidebar-accent)] text-[var(--sidebar-foreground)] border border-[var(--sidebar-border)]'
}

export default function Button({ children, variant = 'primary', type = 'button', className, ...rest }: ButtonProps) {
  return (
    <button type={type} {...rest} className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none h-9 px-4 py-2 w-full cursor-pointer ${variantClasses[variant]} ${className}`}>
      {children}
    </button>
  );
}
