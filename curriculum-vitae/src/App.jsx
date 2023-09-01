import './App.css'
import Layout from './components/layout/Layout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import { ModeProvider } from './hooks/ModeProvider'

function App() {
  return (
    <ModeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Layout>
      </Router>
    </ModeProvider>
  )
}

export default App
