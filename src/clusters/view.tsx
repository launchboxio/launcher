import * as React from "react"
import data from "../data/clusters.json";
import {useLoaderData} from "react-router-dom";

export async function loader({ params }: any) {
  return data.clusters.find((item: any) => item.id == params.clusterId)
}

export default function() {
  const cluster = useLoaderData() as any;
  return (
    <>
      <h3>{ cluster.name }</h3>
    </>
  )
}
