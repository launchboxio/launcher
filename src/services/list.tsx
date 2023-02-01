import * as React from "react"
import data from "../data/services.json"

import { Card, Elevation, Button } from "@blueprintjs/core"
import { Link } from "react-router-dom"

import Page from "../components/page"
import Break from "../components/break"
export default function() {

  return (
    <Page>
      <h2>Services</h2>
      <Break />
      {data.services.map((item) => {
        return (
          <div style={{flexBasis: "100%"}}>
            <Card interactive={true} elevation={Elevation.TWO}>
              <h5>{ item.host }</h5>
              <p>Card content</p>
              <Button>Submit</Button>
            </Card>
          </div>

        )
      })}
    </Page>
  )
}
