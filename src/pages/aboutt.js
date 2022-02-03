import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"

const About = () => {
    return (
        <Layout>
            {/* <SEO title="About" /> */}
            <main className="page">
                <section className="about-page">
                    <article>
                        <h2>I'm baby coloring book poke taxidermy</h2>
                        <p>
                            Taxidermy forage glossier letterpress heirloom before they sold
                            out you probably haven't heard of them banh mi biodiesel chia.
                        </p>
                        <p>
                            Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
                            retro.
                        </p>
                        <Link to="/contact" className="btn">
                            contact
                        </Link>
                    </article>
                    <StaticImage
                        src="../assets/images/about.jpeg"
                        alt="Person Pouring Salt in Bowl"
                        className="about-img"
                        placeholder="blurred"
                    />
                </section>
                <section className="featured-recipes">
                    <h5>Look at this Awesomesouce!</h5>
                    {/* <RecipesList recipes={recipes} /> */}
                </section>
                <section className="featured-recipes">
                    <h5>Look at this Awesomesouce !</h5>
                    <RecipesList />
                </section>
            </main>
        </Layout>
    )
}

const query = graphql`
{
  allContentfulRecipe(
    sort: {fields: title, order: ASC}
    filter: {featured: {eq: true}}
  ) {
    nodes {
      title
      id
      prepTime
      cookTime
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
    totalCount
  }
}
`

export default About