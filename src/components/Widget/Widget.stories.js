import React, { useState } from "react"
import { action } from "@storybook/addon-actions"

import Widget from "./"

export default {
  title: "Widget",
  component: Widget,
  argTypes: {},
}

export const Normal = () => {
  const [expanded, setExpanded] = useState(false)
  const [live, setLive] = useState(false)
  return (
    <Widget
      isLive={live}
      onClick={() => setLive(!live)}
      expanded={expanded}
      onChangeExpand={setExpanded}
      onHide={action("onHide")}
    />
  )
}

export const MarginRightAndTop = () => {
  const [expanded, setExpanded] = useState(false)
  const [live, setLive] = useState(false)
  return (
    <Widget
      isLive={live}
      marginRight={100}
      marginBottom={100}
      onClick={() => setLive(!live)}
      expanded={expanded}
      onChangeExpand={setExpanded}
      onHide={action("onHide")}
    />
  )
}
