import * as React from "react"
import data from "../data/accounts.json"

import { Card, Elevation, Button } from "@blueprintjs/core"
import { Link } from "react-router-dom"

export default function() {

  return (
    <>
      <h2>Clusters</h2>

      {data.accounts.map((item) => {
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
