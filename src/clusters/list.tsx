import * as React from "react"
import data from "../data/clusters.json"

import { Card, Elevation, Button } from "@blueprintjs/core"
import { Link } from "react-router-dom"

export default function() {

  return (
    <>
      <h2>Clusters</h2>

      {data.clusters.map((item) => {
        return (
          <Card interactive={true} key={ item.id } elevation={Elevation.TWO}>
            <h5><Link to={`/clusters/${ item.id }`}>{ item.name }</Link></h5>
            <p>Card content</p>
            <Button>Submit</Button>
          </Card>
        )
      })}
    </>
  )
}
