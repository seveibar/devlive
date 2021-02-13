import React from "react"
import styled from "styled-jss"

const Container = styled("div")({
  position: "fixed",
  right: 12,
  bottom: 12,
  color: "#888",
  backgroundColor: "#fff",
  boxShadow: "0px 3px 5px rgba(0,0,0,0.1)",
  borderRadius: 32,
  fontSize: 24,
  fontWeight: "bold",
  width: 20,
  height: 20,
  textAlign: "center",
  cursor: "pointer",
  transition: "transform 200ms",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    transform: "scale(1.2,1.2)",
  },
})

export const X = (props) => (
  <Container {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      style={{ width: 16, height: 16 }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </Container>
)

export default X
