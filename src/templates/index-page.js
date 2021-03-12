import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
//import Features from '../components/Features'
//import BlogRoll from '../components/BlogRoll'

import Image1 from '../../static/img/image1.webp'
import Image2 from '../../static/img/image2.webp'
import Image3 from '../../static/img/image3.webp'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
        height: '80vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section section1">
          <div className="columns">
            <div className="column is-20 is-offset-1 service-column">
              <div className="content">
                <div className="services">
                  <h3 className="has-text-weight-semibold is-size-2">Our Services</h3>
                  <div className="services-content">
                    <div className="services-content__card">
                      <div className="card-image"><img src={Image1} alt="Roof maintenance"/></div>
                      <div className="card-content">
                        <h3>Roof Maintenance</h3>
                        <div className="card-description">
                          Magna aliqa enim sed ipsum nisi ainy veniam quis nostrul aliqua enim lorem ipsum gui dolor sit amet tempor.
                        </div>
                      </div>
                    </div>
                    <div className="services-content__card">
                      <div className="card-image"><img src={Image2} alt="Roof Inspection"/></div>
                      <div className="card-content">
                        <h3>Roof Inspection</h3>
                        <div className="card-description">
                          Magna aliqa enim sed ipsum nisi ainy veniam quis nostrul aliqua enim lorem ipsum gui dolor sit amet tempor.
                        </div>
                      </div>
                    </div>
                    <div className="services-content__card">
                      <div className="card-image"><img src={Image3} alt="Insulation and Reparis"/></div>
                      <div className="card-content">
                        <h3>Insulation & Repairs</h3>
                        <div className="card-description">
                          Magna aliqa enim sed ipsum nisi ainy veniam quis nostrul aliqua enim lorem ipsum gui dolor sit amet tempor.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
