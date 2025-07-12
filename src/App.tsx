import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { Landing } from './Components/Landing'
import { Contact } from './Components/Contact'
import { About } from './Components/About'
import { Projects } from './Components/Projects'
import { Opine } from './Components/Projects/Opine'
import './styles/index.scss'
import { Boutique } from './Components/Projects/Boutique'
import { MovieQuiz } from './Components/Projects/MovieQuiz'
import { Routes } from 'react-router'

export function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
        <Route path='/' Component={Landing} />
        <Route path='/projects' Component={Projects} />
        <Route path='/projects/opine' Component={Opine} />
        <Route path='/projects/movie-quiz' Component={MovieQuiz} />
        <Route path='/projects/boutique' Component={Boutique} />
      </Routes>
      <Footer />
    </Router>
  )
}
