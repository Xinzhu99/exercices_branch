import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { Content } from './components/Content'
import { SideBar } from './components/SideBar'

function App() {

  return (
    <>
      <Logo />
      <h1>Hello</h1>
      <Navbar />
      <SearchBar />
      < Content />
      < Content />
      < Content />
      < Content />
      < Content />
      <SideBar />
    </>
  )
}

export default App
