import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import WindowSizeContextProvider from "./contexts/windowSizeContext"
import AppContextProvider from "./contexts/appContext"
import "./styles/global.scss"
require("typeface-muli")
require("typeface-roboto-mono")

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <WindowSizeContextProvider>
        <App />
      </WindowSizeContextProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
