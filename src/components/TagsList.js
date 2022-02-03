import React from 'react'
import setupTags from '../utils/setupTags'

const TagsList = ({ recipes }) => {
    const newTags = setupTags(recipes)
    return (
        <div className="tag-container">
            <h4>recipe</h4>

        </div>
    )
}

export default TagsList
