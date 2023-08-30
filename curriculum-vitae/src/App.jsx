import './App.css'
import Education from './components/Education'
import Hero from './components/Hero'
import Languages from './components/Languages'
import Skills from './components/Skills'
import Layout from './components/layout/Layout'
import { useState } from 'react'

function App() {
  
  const [dark,setDark] = useState(false)
  const toggleDarkMode = ()=>{
    console.log('cambio')
    setDark(!dark)
    console.log(dark)
  }
  return (
    <Layout dark={dark} toggled={toggleDarkMode}>
        <Hero dark={dark} />
        <Languages dark={dark}/>
        <Skills dark={dark}/>
        <Education dark={dark}/>
    </Layout>
  )
}

export default App
