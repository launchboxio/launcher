import * as React from "react"

export default (props : any) => {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      padding: "10px",
      width: "100%"
    }}>
      { props.children }
    </div>
  )
}