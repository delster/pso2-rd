import React from 'react'
import tw from 'twin.macro'
import { Link } from 'gatsby'

export default ({ siteTitle }) => (
  <Header>
    <Container>
      <Link to="/">{siteTitle}</Link>
    </Container>
  </Header>
)

const Header = tw.header`bg-red-800 text-white px-8 py-4 border-b-4 border-red-700`
const Container = tw.div`flex items-center justify-between container mx-auto`
