import React from "react";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  change?: {
    value: number;
    type: "increase" | "decrease";
  };
  description?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon: Icon,
  iconColor,
  iconBgColor,
  change,
  description,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>

          {change && (
            <div className="flex items-center mt-2">
              <span
                className={`text-sm font-medium ${
                  change.type === "increase" ? "text-green-600" : "text-red-600"
                }`}
              >
                {change.type === "increase" ? "+" : "-"}
                {Math.abs(change.value)}%
              </span>
              <span className="text-sm text-gray-500 ml-1">
                dari bulan lalu
              </span>
            </div>
          )}

          {description && (
            <p className="text-xs text-gray-500 mt-1">{description}</p>
          )}
        </div>

        <div className={`p-3 rounded-lg ${iconBgColor}`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
