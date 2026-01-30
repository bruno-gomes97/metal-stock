interface IconContainerProps {
  children: React.ReactNode;
  colorBg?: string;
  height?: string;
  width?: string;
}

export default function IconContainer({ children, colorBg, height = '16', width = '16'}: IconContainerProps) {
  return (
    <div className={`max-auto w-${width} h-${height} bg-[var(--${colorBg})] rounded-lg flex items-center justify-center`}>
      {children}
    </div>
  );
}
