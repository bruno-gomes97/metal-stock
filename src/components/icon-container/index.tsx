interface IconContainerProps {
  children: React.ReactNode;
  colorBg?: string;
  height?: string;
  width?: string;
  opacity?: string;
}

export default function IconContainer({ children, colorBg, height = '16', width = '16', opacity }: IconContainerProps) {
  return (
    <div className={`max-auto w-${width} h-${height} bg-[var(--${colorBg})]/${opacity} rounded-lg flex items-center justify-center`}>
      {children}
    </div>
  );
}
