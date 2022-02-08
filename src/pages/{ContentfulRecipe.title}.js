import React from 'react'
import { graphql } from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import {BsClockHistory, BsClock, BsProple} from "react-icons/bs"

const RecipeTemplate = ({data}) => {
    console.log(data)
    const {} = data.contentfulRecipe
    return (
        <div>
            <h4>Recipe template</h4>
        </div>
    )
}

export const query = graphql`
query get($title: String) {
    contentfulRecipe(title: {eq: $title}) {
      title
      cookTime
      content {
        instructions
        ingredients
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`
export default RecipeTemplate