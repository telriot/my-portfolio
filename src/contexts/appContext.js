import React, { useReducer, createContext } from "react"
import { isBrowser, isMobile } from "react-device-detect"
import { TYPES } from "./types"
const initialState = {
  activeProject: 0,
  hover: 0,
}
export const AppContext = createContext()

const AppContextProvider = (props) => {
  const appReducer = (state, action) => {
    switch (action.type) {
      case TYPES.SET_ACTIVE_PROJECT:
        return {
          ...state,
          activeProject: action.project,
        }
      case TYPES.SET_HOVER:
        return {
          ...state,
          hover: action.hover,
        }
      default:
        return state
    }
  }
  const projectHandlers = {
    handleClick: (project) => () => {
      if (project === state.activeProject) {
        dispatch({ type: "SET_ACTIVE_PROJECT", project: 0 })
      } else {
        dispatch({ type: "SET_ACTIVE_PROJECT", project })
      }
    },
    handleMouseEnter: (bar) => () => {
      if (isMobile) return

      dispatch({ type: "SET_HOVER", hover: bar })
    },
    handleMouseLeave: () => {
      if (isMobile) return

      dispatch({ type: "SET_HOVER", hover: 0 })
    },
  }

  const [state, dispatch] = useReducer(appReducer, initialState)
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        projectHandlers,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
