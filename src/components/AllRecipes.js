import React from 'react'
import RecipesList from './RecipesList'
import TagsList from './TagsList'

const AllRecipes = () => {
    return (
        <div>
            <h4>all recipes</h4>
            <TagsList />
            <RecipesList />
        </div>
    )
}

export default AllRecipes
