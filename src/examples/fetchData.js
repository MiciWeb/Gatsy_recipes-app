import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
query {
  site {
    info:siteMetadata {
      complexData {
        age
        name
      }
      person {
        age
        name
      }
      author
      simpleData
      title
    }
  }
}
`

const FetchData = () => {
  const { site: { info: { person: {name} } } } = useStaticQuery(getData)
  return (
    <div>
      {/* <h2> Name : {data.site.siteMetadata.person.name}</h2> */}
        {name}
    </div>
  )
}

export default FetchData
