import React from "react"
import ReactDOM from "react-dom"
import ControlledWidget from "./components/ControlledWidget"

window.addEventListener("load", () => {
  const elm = document.createElement("div")
  document.body.appendChild(elm)
  ReactDOM.render(
    <React.StrictMode>
      <ControlledWidget />
    </React.StrictMode>,
    elm
  )
})
