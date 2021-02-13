import React, { useCallback, useState, useEffect } from "react"
import Icon from "../Icon"
import * as colors from "material-ui-colors"
import classnames from "classnames"
import X from "../X"
import styled from "styled-jss"

const Container = styled("div")({
  position: "fixed",
  right: 16,
  bottom: 16,
  cursor: "pointer",
  display: "inline-flex",
  padding: 12,
  backgroundColor: colors.blue[700],
  borderRadius: 32,
  boxShadow: "0px 3px 5px rgba(0,0,0,0.3)",
  transition: "width 500ms",
  width: 32,
  overflow: "hidden",
  "&.expanded": {
    width: 240,
  },
  transition: "background-color 300ms, width 300ms",
})
const Text = styled("div")({
  position: "absolute",
  width: 240,
  left: 52,
  top: 20,
  transition: "opacity 500ms",
  fontFamily: "sans-serif",
  color: "#fff",
  fontWeight: "bold",
})

export const Widget = ({
  isLive,
  liveMessage = "seveibar is live coding!",
  notLiveMessage = "seveibar codes this live",
  expanded,
  marginRight,
  marginBottom,
  onChangeExpand,
  onClick,
  onHide,
}) => {
  const onMouseOver = useCallback(() => onChangeExpand(true), [])
  const onMouseOut = useCallback(() => onChangeExpand(false), [])
  const [pulseOn, setPulseOn] = useState(false)

  useEffect(() => {
    if (!isLive) {
      if (pulseOn) setPulseOn(false)
      return
    }
    let times = 0
    const interval = setInterval(() => {
      times += 1
      setPulseOn(expanded ? false : times % 2 === 0)
      if (times > 10) {
        setPulseOn(false)
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [isLive, expanded])

  return (
    <>
      <Container
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseOut}
        onClick={onClick}
        className={classnames({ expanded })}
        style={{
          marginRight,
          marginBottom,
          backgroundColor: pulseOn ? colors.red[700] : colors.blue[700],
        }}
      >
        <Icon size={32} fill={"#fff"} />
        <Text style={{ opacity: expanded ? 1 : 0 }}>
          {isLive ? liveMessage : notLiveMessage}
        </Text>
      </Container>
      <X style={{ marginBottom, marginRight }} onClick={onHide} />
    </>
  )
}

export default Widget
