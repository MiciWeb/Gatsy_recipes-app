import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
              transformOptions: {grayscale: false}
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
                const pathToImage = getImage(image.node)
                return <article key={index}>
                    <GatsbyImage image={pathToImage} alt={name} />
                    <p>{name}</p>
                </article>
            })}
        </div>
    )
}

export default Gallery
