import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import format from "date-fns/format"
import parseJSON from "date-fns/parseJSON"
import differenceInMilliseconds from "date-fns/differenceInMilliseconds"

const IndexPage = ({ data }) => {
  console.log({ data })
  let [clientDate, setClientDate] = useState()
  useEffect(() => {
    setClientDate(new Date())
  }, [])

  console.log({ clientDate })

  return (
    <Layout>
      <SEO title="Home" />
      <p>
        The data source updated the time at{" "}
        {format(parseJSON(data.theTime.date), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")}{" "}
      </p>
      <p>
        {clientDate &&
          `which was ${differenceInMilliseconds(
            clientDate,
            parseJSON(data.theTime.date)
          ) / 1000} seconds before you loaded the page.`}
      </p>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    theTime {
      date
    }
  }
`
