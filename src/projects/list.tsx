import * as React from "react"
import data from "../data/projects.json"

import { Card, Elevation, Button, H5 } from "@blueprintjs/core"
import { Link } from "react-router-dom"
import Page from "../components/page"
import Break from "../components/break"

import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip
} from "recharts";

const metrics = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function() {

  return (
    <Page>
      <h3>Listing all projects</h3>
      <Break />
      {data.projects.map((item) => {
        let projectState
        if (item.state == "running") {
          projectState = <Button text={"Running"} icon={"play"} />
        } else if (item.state == "paused") {
          projectState = <Button text={"Paused"} icon={"pause"} />
        }
        return (
          <div style={{flexBasis: "100%"}}>
            <Card interactive={true} key={ item.id } elevation={Elevation.TWO}>
              <div style={{

              }}>
                <H5>
                  <Link to={`/projects/${ item.id }`}>{ item.name }</Link>
                  <div style={{ marginLeft: "auto"}}>
                    {projectState}
                  </div>
                </H5>
              </div>
              <div style={{display: "flex"}}>
                <ResponsiveContainer height={100}>
                  <LineChart
                    width={100}
                    height={100}
                    data={metrics}
                    syncId="anyId"
                    title={"CPU"}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <XAxis/>
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
                <ResponsiveContainer height={100}>
                  <LineChart
                    width={100}
                    height={100}
                    title={"Memory"}
                    data={metrics}
                    syncId="anyId"
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <XAxis/>
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
                <ResponsiveContainer height={100}>
                  <LineChart
                    width={100}
                    height={100}
                    title={"Disk"}
                    data={metrics}
                    syncId="anyId"
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <XAxis/>
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <Button>Submit</Button>
            </Card>
          </div>
        )
      })}
    </Page>
  )
}