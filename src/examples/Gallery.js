import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const query = graphql`
  {
    allFile(filter: {extension: {ne: "svg"}}) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(
              layout: FIXED
              placeholder: BLURRED
              transformOptions: {grayscale: true}
              width: 200
              height: 200
            )
          }
        }
      }
    }
  }
`

const Gallery = () => {
    const data = useStaticQuery(query)
    const nodes = data.allFile.edges
    return (
        <div>
            {nodes.map((image, index) => {
                const { name } = image.node
                return <article key={index}>
                    <GatsbyImage image={image.node.childImageSharp.gatsbyImageData} />
                    <p>{name}</p>
                </article>
            })}
        </div>
    )
}

export default Gallery
