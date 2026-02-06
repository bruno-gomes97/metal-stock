type Rounded = 'lg' | 'full';

interface IconContainerProps {
  children: React.ReactNode;
  colorBg?: string;
  height?: string;
  width?: string;
  opacity?: string;
  rounded?: Rounded;
}

export default function IconContainer({ children, colorBg, height = '16', width = '16', opacity = '0', rounded = 'lg' }: IconContainerProps) {
  return (
    <div className={`max-auto w-${width} h-${height} bg-[var(--${colorBg})]/${opacity} rounded-${rounded} flex items-center justify-center`}>
      {children}
    </div>
  );
}
