"use client"

import { useState } from "react"
import GameIntro from "@/components/game-intro"
import GameBoard from "@/components/game-board"
import GameOver from "@/components/game-over"

export default function Home() {
  const [gameState, setGameState] = useState<"intro" | "playing" | "gameOver">("intro")
  const [gameResult, setGameResult] = useState<any>(null)

  const handleStartGame = () => {
    setGameState("playing")
  }

  const handleGameOver = (result: any) => {
    setGameResult(result)
    setGameState("gameOver")
  }

  const handleRestart = () => {
    setGameState("intro")
    setGameResult(null)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {gameState === "intro" && <GameIntro onStartGame={handleStartGame} />}
      {gameState === "playing" && <GameBoard onGameOver={handleGameOver} />}
      {gameState === "gameOver" && <GameOver result={gameResult} onRestart={handleRestart} />}
    </main>
  )
}
