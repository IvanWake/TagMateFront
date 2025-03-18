"use client"

import { useEffect, useState } from "react"
import Lottie from "lottie-react"
import Loading from "../Layout/Loading"

interface LottieAnimationProps {
  animationPath: string
  width?: number | string
  height?: number | string
  loop?: boolean
  autoplay?: boolean
}

export default function LottieAnimation({
  animationPath,
  width = 300,
  height = 300,
  loop = true,
  autoplay = true,
}: LottieAnimationProps) {
  const [animationData, setAnimationData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAnimation = async () => {
      try {
        setLoading(true)
        if (animationPath.startsWith("http")) {
          const response = await fetch(animationPath)
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          const data = await response.json()
          setAnimationData(data)
        } else {
          const data = await import(`../public/${animationPath}`)
          setAnimationData(data.default)
        }
      } catch (err) {
        console.error("ошибка анимации:", err)
        setError(err instanceof Error ? err.message : "ошибка загрузки анимации")
      } finally {
        setLoading(false)
      }
    }

    fetchAnimation()
  }, [animationPath])

  if (loading) {
    return (
      <div className="flex items-center justify-center" style={{ width, height }}>
        <Loading/>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center text-destructive" style={{ width, height }}>
        Error: {error}
      </div>
    )
  }

  return <Lottie animationData={animationData} loop={loop} autoplay={autoplay} style={{ width, height }} />
}