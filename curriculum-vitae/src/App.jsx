import './App.css'
import Education from './components/Education'
import Header from './components/Header'
import Hero from './components/Hero'
import Languages from './components/Languages'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Languages />
        <Skills />
        <Education />
      </main>
    </>
  )
}

export default App
