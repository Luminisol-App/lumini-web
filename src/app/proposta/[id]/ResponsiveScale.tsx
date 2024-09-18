'use client'

import { useState, useEffect } from 'react'

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowDimensions
}

export function ResponsiveScale({ children }: { children: React.ReactNode }) {
  const { width, height } = useWindowDimensions()
  const a4Width = 793.7007874
  const a4Height = 1122.519685

  const scale = () => {
    const screenWidth = width
    const screenHeight = height

    const widthRatio = screenWidth / a4Width
    const heightRatio = screenHeight / a4Height

    return Math.min(widthRatio, heightRatio)
  }

  return (
    <div
      style={{
        width: `${a4Width * scale()}px`,
        height: `${a4Height * scale()}px`
      }}
    >
      <div
        style={{
          transform: `scale(${scale()})`,
          transformOrigin: 'top left'
        }}
      >
        {children}
      </div>
    </div>
  )
}
