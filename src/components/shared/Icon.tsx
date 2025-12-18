import { icons } from "lucide-react";

type IconName = keyof typeof icons;

const Icon = ({
  name,
  color,
  size,
  className,
  onClick,
}: {
  name: IconName;
  color?: string;
  size?: number;
  onClick?: () => void;
  className?: string;
}) => {
  const LucideIcon = icons[name];
  return (
    <LucideIcon
      color={color}
      className={className}
      onClick={onClick}
      size={size}
    />
  );
};

export default Icon;
