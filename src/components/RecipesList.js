import React from 'react'
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const RecipesList = ({ recipes = [] }) => {
    return (
        <div className="recipes-list">
            {recipes.map((recipe)=>{
                const {id,title,image,prepTime,cookTime} = recipe;
                return <Link to={`/${title}`}>{recipe.title}</Link>
            })}
        </div>
    )
}

export default RecipesList