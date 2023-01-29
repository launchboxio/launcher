import * as React from "react"
import data from "../data/services.json"

import { Card, Elevation, Button } from "@blueprintjs/core"
import { Link } from "react-router-dom"

export default function() {

  return (
    <>
      <h2>Services</h2>

      {data.services.map((item) => {
        return (
          <Card interactive={true} elevation={Elevation.TWO}>
            <h5>{ item.host }</h5>
            <p>Card content</p>
            <Button>Submit</Button>
          </Card>
        )
      })}
    </>
  )
}
