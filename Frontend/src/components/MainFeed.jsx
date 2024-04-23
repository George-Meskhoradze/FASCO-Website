import React from 'react'
import Header from './PageStructure-components/Header'
import Section from './PageStructure-components/Section'
import Footer from './PageStructure-components/Footer'
import SectionTwo from './PageStructure-components/SectionTwo'

export default function MainFeed() {
  return (
    <div>
        <Header />
        {/* <Section /> */}
        <SectionTwo />
        <Footer />
    </div>
  )
}
