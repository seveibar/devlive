import React from "react"
import Icon from "../Icon"
import styled from "styled-jss"
import * as colors from "material-ui-colors"
import classnames from "classnames"

const Container = styled("div")({
  "&.expanded": {},
})

export const Widget = ({ expanded }) => {
  return (
    <Container className={classnames({ expanded })}>
      <Icon size={24} fill={colors.blue[700]} />
    </Container>
  )
}

export default Widget
