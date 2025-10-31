"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface GameOverProps {
  result: any;
  onRestart: () => void;
}

export default function GameOver({ result, onRestart }: GameOverProps) {
  const getEndingTitle = () => {
    if (result.status === "win") return "Hoàn thành nhiệm kỳ!";

    switch (result.reason) {
      case "Tập đoàn phá sản":
        return "💔 Tập đoàn Phá Sản";
      case "Mất điện toàn quốc - Quân đội vào cuộc":
        return "⚫ Mất điện Toàn Quốc";
      case "Bạo loạn xã hội":
        return "🔥 Bạo Loạn Xã Hội";
      case "Cách chức vì mất tin tưởng chính trị":
        return "🏛️ Bị Cách Chức";
      default:
        return "❌ Trò chơi Kết Thúc";
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <Card className='max-w-2xl w-full bg-slate-800 border-2 border-slate-700'>
        <div className='p-8 space-y-6'>
          {/* Tiêu đề */}
          <div className='text-center'>
            <h1 className='text-4xl font-bold text-blue-400 mb-2'>
              {getEndingTitle()}
            </h1>
            <p className='text-gray-300'>{result.reason}</p>
          </div>

          {/* Chỉ số cuối */}
          {result.finalKpis && (
            <div className='bg-slate-700 p-6 rounded border border-slate-600'>
              <h3 className='text-lg font-bold text-blue-400 mb-4'>
                Chỉ Số Cuối Cùng:
              </h3>
              <div className='grid grid-cols-2 gap-4'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-green-400'>
                    {Math.round(result.finalKpis.finance)}
                  </div>
                  <div className='text-sm text-gray-400'>Tài chính</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-yellow-400'>
                    {Math.round(result.finalKpis.energy)}
                  </div>
                  <div className='text-sm text-gray-400'>Năng lượng</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-red-400'>
                    {Math.round(result.finalKpis.satisfaction)}
                  </div>
                  <div className='text-sm text-gray-400'>Hài lòng</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-purple-400'>
                    {Math.round(result.finalKpis.politics)}
                  </div>
                  <div className='text-sm text-gray-400'>Chính trị</div>
                </div>
              </div>
            </div>
          )}

          {/* Thông điệp */}
          <div className='bg-slate-700/50 p-4 rounded border border-slate-600'>
            <p className='text-gray-200 text-center'>
              {result.status === "win"
                ? "🎉 Bạn đã hoàn thành nhiệm kỳ 5 năm và cân bằng được tất cả các thách thức. Đó là một thành tích đáng tự hào!"
                : "💭 Nhiệm kỳ của bạn kết thúc. Mỗi quyết định đều có hệ quả - hãy thử lại và tìm ra chiến lược tốt hơn!"}
            </p>
          </div>

          {/* Nút trở lại */}
          <Button
            onClick={onRestart}
            className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-6 text-lg'
          >
            TRỞ LẠI MENU
          </Button>
        </div>
      </Card>
    </div>
  );
}
