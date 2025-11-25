import { icons } from "lucide-react";

type IconName = keyof typeof icons;

const Icon = ({
  name,
  color,
  size,
  onClick,
}: {
  name: IconName;
  color?: string;
  size?: number;
  onClick?: () => void;
}) => {
  const LucideIcon = icons[name];
  return <LucideIcon color={color} onClick={onClick} size={size} />;
};

export default Icon;
