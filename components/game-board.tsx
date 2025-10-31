"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import KpiDashboard from "./kpi-dashboard"
import EventPanel from "./event-panel"
import { generateEvent, checkGameOver } from "@/lib/game-events"
import { calculateImpact } from "@/lib/game-mechanics"

interface GameBoardProps {
  onGameOver: (result: any) => void
}

export default function GameBoard({ onGameOver }: GameBoardProps) {
  const [year, setYear] = useState(1)
  const [quarter, setQuarter] = useState(1)
  const [kpis, setKpis] = useState({
    finance: 70,
    energy: 80,
    satisfaction: 75,
    politics: 80,
  })
  const [currentEvent, setCurrentEvent] = useState<any>(null)
  const [history, setHistory] = useState<any[]>([])
  const [gameMessage, setGameMessage] = useState("")

  // Sinh sự kiện đầu tiên
  useEffect(() => {
    const event = generateEvent()
    setCurrentEvent(event)
  }, [])

  const handleDecision = (choiceIndex: number) => {
    if (!currentEvent) return

    const choice = currentEvent.choices[choiceIndex]
    const impact = calculateImpact(choice.impact)

  // Cập nhật KPI
    const newKpis = {
      finance: Math.max(0, Math.min(100, kpis.finance + impact.finance)),
      energy: Math.max(0, Math.min(100, kpis.energy + impact.energy)),
      satisfaction: Math.max(0, Math.min(100, kpis.satisfaction + impact.satisfaction)),
      politics: Math.max(0, Math.min(100, kpis.politics + impact.politics)),
    }

    setKpis(newKpis)

  // Ghi lịch sử
    const historyEntry = {
      quarter,
      year,
      event: currentEvent.title,
      choice: choice.label,
      impacts: impact,
    }
    setHistory([...history, historyEntry])

  // Kiểm tra kết thúc trò chơi
    const gameOverResult = checkGameOver(newKpis, year, quarter)
    if (gameOverResult) {
      onGameOver(gameOverResult)
      return
    }

  // Chuyển sang quý tiếp theo
    let nextQuarter = quarter + 1
    let nextYear = year

    if (nextQuarter > 4) {
      nextQuarter = 1
      nextYear = year + 1

      if (nextYear > 5) {
        // Game completed successfully
        onGameOver({
          status: "win",
          reason: "Hoàn thành nhiệm kỳ 5 năm thành công!",
          finalKpis: newKpis,
          history,
        })
        return
      }
    }

    setYear(nextYear)
    setQuarter(nextQuarter)

  // Sinh sự kiện tiếp theo
    const nextEvent = generateEvent()
    setCurrentEvent(nextEvent)
    setGameMessage(`Năm ${nextYear}, Quý ${nextQuarter}`)

    setTimeout(() => setGameMessage(""), 2000)
  }

  return (
    <div className="min-h-screen p-6 space-y-6">
  {/* Đầu trang */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-blue-400">
            NHIỆM KỲ: NĂM {year} - QUÝ {quarter}
          </h1>
          <p className="text-gray-400">({quarter + (year - 1) * 4}/20 quý)</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-amber-400">
            Tiến độ: {Math.round(((quarter + (year - 1) * 4) / 20) * 100)}%
          </div>
          <Progress value={((quarter + (year - 1) * 4) / 20) * 100} className="w-64 mt-2" />
        </div>
      </div>

  {/* Nội dung chính */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  {/* Bảng KPI */}
        <div className="lg:col-span-1">
          <KpiDashboard kpis={kpis} />
        </div>

        {/* Event Panel */}
        <div className="lg:col-span-2">
          <EventPanel event={currentEvent} onDecision={handleDecision} />
        </div>
      </div>

      {/* Game Message */}
      {gameMessage && (
        <div className="text-center p-4 bg-blue-500/20 border border-blue-400 rounded">
          <p className="text-blue-300 font-semibold">{gameMessage}</p>
        </div>
      )}
    </div>
  )
}
