import React from 'react'
import RecipesList from './RecipesList'
import TagsList from './TagsList'
import {graphql, useStaticQuery} from "gatsby"

const query = graphql`
  {
    allContentfulRecipe(sort: {fields: title, order: ASC}) {
      nodes {
        id
        title
        prepTime
        cookTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
    const {allContentfulRecipe:{nodes:recipes}} = useStaticQuery(query);
    console.log(recipes)
    return (
        <section className="recipes-container">
            <TagsList recipes={recipes} />
            <RecipesList recipes={recipes} />
        </section>
    )
}

export default AllRecipes
