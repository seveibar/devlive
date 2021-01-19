import React, { useState } from "react"
import Widget from "../Widget"

function getSavedHiddenState() {
  try {
    return window.localStorage.getItem("__devlive_hidden") === "true"
  } catch (e) {
    return false
  }
}

export const ControlledWidget = () => {
  const [expanded, setExpanded] = useState(false)
  const [hidden, setHidden] = useState(getSavedHiddenState())

  if (window.d.hideIfLive && !window.d.isLive) return null
  if (hidden) return null

  return (
    <Widget
      isLive={window.d.isLive}
      liveMessage={window.d.liveMessage}
      notLiveMessage={window.d.notLiveMessage}
      expanded={expanded}
      onChangeExpand={setExpanded}
      onClick={() => {
        window.location.href = window.d.url
      }}
      onHide={() => {
        setHidden(true)
        window.localStorage.setItem("__devlive_hidden", "true")
      }}
    />
  )
}

export default ControlledWidget
