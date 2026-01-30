type ButtonVariant = 'primary';

interface ButtonProps {
  children?: React.ReactNode;
	variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
	primary: 'bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90'
}

export default function Button({ children, variant = 'primary' }: ButtonProps) {
  return (
    <button className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none h-9 px-4 py-2 w-full cursor-pointer ${variantClasses[variant]}`}>
      {children}
    </button>
  );
}
