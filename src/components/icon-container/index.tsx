interface IconContainerProps {
  children: React.ReactNode;
  colorBg?: string;
}

export default function IconContainer({ children, colorBg }: IconContainerProps) {
  return (
    <div className={`max-auto w-16 h-16 bg-[var(--${colorBg})] rounded-lg flex items-center justify-center`}>
      {children}
    </div>
  );
}
