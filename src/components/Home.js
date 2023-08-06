import React from 'react'
import Navbar from './Navbar'
import Textform from './Textform'

export default function Home() {
  return (
    <>
    <Navbar title="Textutils" abouttext='About' />
    <div className="container">
      <Textform heading="Enter the text to analyze" />
    </div>
  </>
  )
}
