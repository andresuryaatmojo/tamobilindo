import React from "react";

interface ChartData {
  label: string;
  value: number;
  color: string;
  percentage: number;
}

interface SimpleChartProps {
  title: string;
  data: ChartData[];
  type?: "bar" | "pie";
  height?: number;
}

const SimpleChart: React.FC<SimpleChartProps> = ({ 
  title, 
  data, 
  type = "bar", 
  height = 200 
}) => {
  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      
      {type === "bar" ? (
        <div className="space-y-3">
          {data.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-gray-700">{item.label}</span>
                <span className="text-gray-500">{item.value}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${item.color}`}
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center" style={{ height }}>
          <div className="relative w-32 h-32">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {data.map((item, index) => {
                const previousPercentage = data
                  .slice(0, index)
                  .reduce((sum, d) => sum + d.percentage, 0);
                
                return (
                  <circle
                    key={index}
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={item.color}
                    strokeWidth="8"
                    strokeDasharray={`${item.percentage * 2.51} ${100 * 2.51}`}
                    strokeDashoffset={`${previousPercentage * 2.51}`}
                    className="transition-all duration-500"
                  />
                );
              })}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-semibold text-gray-700">
                {data.reduce((sum, item) => sum + item.value, 0)}
              </span>
            </div>
          </div>
          
          <div className="ml-6 space-y-2">
            {data.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                <span className="text-sm text-gray-600">{item.label}</span>
                <span className="text-sm font-medium text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleChart; 