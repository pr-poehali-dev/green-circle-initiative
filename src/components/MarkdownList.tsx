import Icon from "@/components/ui/icon";

interface MarkdownListProps {
  items: string[];
  variant?: "bullet" | "check" | "arrow" | "star";
  className?: string;
}

const MarkdownList = ({
  items,
  variant = "bullet",
  className = "",
}: MarkdownListProps) => {
  const getIcon = () => {
    switch (variant) {
      case "check":
        return "Check";
      case "arrow":
        return "ArrowRight";
      case "star":
        return "Star";
      default:
        return "Circle";
    }
  };

  const getIconColor = () => {
    switch (variant) {
      case "check":
        return "text-green-600";
      case "arrow":
        return "text-blue-600";
      case "star":
        return "text-yellow-600";
      default:
        return "text-purple-600";
    }
  };

  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start space-x-3">
          <Icon
            name={getIcon()}
            size={16}
            className={`mt-1 flex-shrink-0 ${getIconColor()}`}
          />
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default MarkdownList;
