"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface KpiDashboardProps {
  kpis: {
    finance: number;
    energy: number;
    satisfaction: number;
    politics: number;
  };
}

const KPI_CONFIG = {
  finance: {
    label: "Tài chính",
    icon: "💰",
    danger: 30,
    warning: 50,
    color: "text-green-400"
  },
  energy: {
    label: "An ninh năng lượng",
    icon: "⚡",
    danger: 30,
    warning: 50,
    color: "text-yellow-400"
  },
  satisfaction: {
    label: "Hài lòng dân",
    icon: "👥",
    danger: 30,
    warning: 50,
    color: "text-red-400"
  },
  politics: {
    label: "Chính trị",
    icon: "🏛️",
    danger: 30,
    warning: 50,
    color: "text-purple-400"
  }
};

export default function KpiDashboard({ kpis }: KpiDashboardProps) {
  const getStatus = (value: number, danger: number, warning: number) => {
    if (value <= danger) return { status: "NGUY HIỂM", color: "text-red-500" };
    if (value <= warning)
      return { status: "CẢNH BÁO", color: "text-orange-400" };
    return { status: "BÌNH THƯỜNG", color: "text-green-400" };
  };

  const getProgressColor = (value: number, danger: number, warning: number) => {
    if (value <= danger) return "bg-red-500";
    if (value <= warning) return "bg-orange-400";
    return "bg-green-500";
  };

  return (
    <Card className="bg-slate-800 border-2 border-slate-700 p-6 space-y-4">
      <h2 className="text-2xl font-bold text-blue-400">📊 CHỈ SỐ CHÍNH</h2>

      <div className="space-y-4">
        {Object.entries(kpis).map(([key, value]) => {
          const config = KPI_CONFIG[key as keyof typeof KPI_CONFIG];
          const { status, color } = getStatus(
            value,
            config.danger,
            config.warning
          );
          const progressColor = getProgressColor(
            value,
            config.danger,
            config.warning
          );

          return (
            <div
              key={key}
              className="bg-slate-700 p-4 rounded border border-slate-600"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span>{config.icon}</span>
                  <span className="font-semibold text-white">
                    {config.label}
                  </span>
                </div>
                <div className="text-right">
                  <div className={`font-bold ${config.color}`}>
                    {Math.round(value)}
                  </div>
                  <div className={`text-xs ${color}`}>{status}</div>
                </div>
              </div>
              <Progress value={value} className={`h-2 ${progressColor}`} />
            </div>
          );
        })}
      </div>

      {/* Cảnh báo */}
      <div className="mt-6 pt-4 border-t border-slate-600 space-y-2">
        <p className="text-xs text-gray-400">Lưu ý:</p>
        <ul className="text-xs text-gray-300 space-y-1 ml-2">
          <li>• Tài chính &lt; 20: Tập đoàn phá sản</li>
          <li>• An ninh năng lượng &lt; 20: Mất điện toàn quốc</li>
          <li>• Hài lòng dân &lt; 20: Bạo loạn xã hội</li>
          <li>• Chính trị &lt; 20: Bị cách chức</li>
        </ul>
      </div>
    </Card>
  );
}
