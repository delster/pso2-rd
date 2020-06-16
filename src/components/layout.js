import React from 'react'
import tw from 'twin.macro'
import { createGlobalStyle } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './partials/header'
import Footer from './partials/footer'

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  h1 {font-size:3.052rem;margin:.25em;text-align:center}
  h2 {font-size:2.441rem;margin-bottom:.25em}
  h3 {font-size:1.953rem;margin-bottom:.25em}
  h4 {font-size:1.563rem;margin-bottom:.25em}
  h5 {font-size:1.25rem;margin-bottom:.25em}
  h6 {font-size:1rem;margin-bottom:.25em}
  p {font-size:20px;margin-bottom:1.5em}
`

const Main = tw.main`container mx-auto`