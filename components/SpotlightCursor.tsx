'use client'

import { useEffect, useState } from 'react'

export default function SpotlightCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }

    const handleMouseLeave = () => setVisible(false)
    const handleMouseEnter = () => setVisible(true)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [visible])

  return (
    <div
      className='pointer-events-none fixed inset-0 z-30 transition-opacity duration-300'
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className='absolute rounded-full'
        style={{
          width: 800,
          height: 800,
          left: position.x - 400,
          top: position.y - 400,
          background:
            'radial-gradient(circle, rgba(94,234,212,0.07) 0%, rgba(94,234,212,0.02) 40%, transparent 70%)'
        }}
      />
    </div>
  )
}
