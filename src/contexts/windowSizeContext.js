import React, { createContext, useState, useEffect } from "react"
import { useScrollPosition } from "../hooks/useScrollPosition"

export const WindowSizeContext = createContext()

const WindowSizeContextProvider = (props) => {
  //media queries
  const [position, setPosition] = useState({ prevPos: 0, currPos: 0 })
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  })

  const isXL = dimensions.width > 1400
  const isLG = dimensions.width > 1152
  const isMD = dimensions.width >= 992
  const isSM = dimensions.width >= 768
  const isXS = dimensions.width >= 576

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useScrollPosition(({ prevPos, currPos }) => {
    setPosition({ prevPos, currPos })
  })

  return (
    <WindowSizeContext.Provider
      value={{
        dimensions,
        isXL,
        isLG,
        isMD,
        isSM,
        isXS,
        position,
      }}
    >
      {props.children}
    </WindowSizeContext.Provider>
  )
}

export default WindowSizeContextProvider
