import React from 'react'
import tw from 'twin.macro'
export default () => (
  <Footer>
    <Colophon>
      © {new Date().getFullYear()} Red Drop, a Ship2 PSO2NA Alliance
    </Colophon>
  </Footer>
)
const Footer = tw.footer`flex items-center justify-center px-8 py-2`
const Colophon = tw.p`font-bold text-xs text-center uppercase`
