"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface EventPanelProps {
  event: any
  onDecision: (choiceIndex: number) => void
}

export default function EventPanel({ event, onDecision }: EventPanelProps) {
  if (!event) {
    return (
      <Card className="bg-slate-800 border-2 border-slate-700 p-8">
        <p className="text-center text-gray-400">Đang tải sự kiện...</p>
      </Card>
    )
  }

  return (
    <Card className="bg-slate-800 border-2 border-amber-500">
      <div className="p-8 space-y-6">
  {/* Biểu tượng & tiêu đề sự kiện */}
        <div className="space-y-3">
          <div className="text-6xl text-center">{event.icon}</div>
          <h3 className="text-2xl font-bold text-amber-400 text-center">{event.title}</h3>
          <p className="text-gray-300 text-center italic">{event.category}</p>
        </div>

        {/* Event Description */}
        <div className="bg-slate-700/50 p-4 rounded border border-amber-500/20">
          <p className="text-gray-200 leading-relaxed">{event.description}</p>
        </div>

        {/* Choices */}
        <div className="space-y-3 pt-4">
          <p className="text-sm text-gray-400 font-semibold">CHỌN CHIẾN LƯỢC:</p>
          {event.choices.map((choice: any, index: number) => (
            <Button
              key={index}
              onClick={() => onDecision(index)}
              className="w-full text-left h-auto py-4 px-4 bg-slate-700 hover:bg-slate-600 text-white border border-slate-500 hover:border-blue-400 transition-all"
            >
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="font-bold text-blue-300">{choice.label}</div>
                <div className="text-xs text-gray-400">{choice.description}</div>

                {/* Impact Preview */}
                <div className="w-full pt-2 mt-2 border-t border-slate-500">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {Object.entries(choice.impact).map(([key, value]: [string, any]) => {
                      const sign = value > 0 ? "+" : ""
                      const color = value > 0 ? "text-green-400" : value < 0 ? "text-red-400" : "text-gray-400"
                      return (
                        <div key={key} className={color}>
                          {key.charAt(0).toUpperCase() + key.slice(1)}: {sign}
                          {value}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </Card>
  )
}
