"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface GameIntroProps {
  onStartGame: () => void
}

export default function GameIntro({ onStartGame }: GameIntroProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full bg-slate-800 border-blue-500 border-2">
        <div className="p-8 space-y-6">
          {/* Tiêu đề */}
          <div className="text-center space-y-2">
            <h1 className="text-5xl font-bold text-blue-400">TYCOON ĐIỆN LỰC</h1>
            <p className="text-xl text-amber-400">Chủ Tịch Tập Đoàn: Nguồn Sống Quốc Gia</p>
          </div>

          {/* Câu chuyện */}
          <div className="bg-slate-700 p-6 rounded border border-blue-400/30 space-y-3">
            <p className="text-gray-100">
              Bạn vừa được bổ nhiệm làm{" "}
              <span className="text-blue-400 font-bold">Chủ tịch Tập đoàn Điện Lực Quốc Gia (ELV)</span>.
            </p>
            <p className="text-gray-100">
              Nhiệm kỳ: <span className="text-amber-400 font-bold">5 năm</span>, gồm{" "}
              <span className="text-amber-400 font-bold">20 quý</span>.
            </p>
            <p className="text-gray-100">Bạn phải cân bằng 4 chỉ số sống-chết:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-green-400">💰</span>
                <span className="text-gray-100">
                  <span className="text-green-400 font-bold">Tài chính:</span> Tránh phá sản
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">⚡</span>
                <span className="text-gray-100">
                  <span className="text-yellow-400 font-bold">An ninh năng lượng:</span> Không mất điện
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">👥</span>
                <span className="text-gray-100">
                  <span className="text-red-400 font-bold">Hài lòng dân:</span> Tránh biểu tình
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">🏛️</span>
                <span className="text-gray-100">
                  <span className="text-purple-400 font-bold">Chính trị:</span> Nhà nước hỗ trợ
                </span>
              </li>
            </ul>
          </div>

          {/* Cảnh báo */}
          <div className="bg-red-900/30 p-4 rounded border border-red-500/50">
            <p className="text-red-300 text-center font-semibold">⚠️ Không có lựa chọn hoàn hảo, chỉ có trade-off!</p>
          </div>

          {/* Nút bắt đầu */}
          <div className="pt-4">
            <Button
              onClick={onStartGame}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-6 text-lg"
            >
              BẮT ĐẦU NHIỆM KỲ
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
