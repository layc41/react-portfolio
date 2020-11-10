import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './pages/About.js'
import Portfolio from './pages/Portfolio.js'
import Contact from './pages/Contact.js'
import Resume from './pages/Resume.js'
import NoMatch from './pages/NoMatch.js'
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/resume' component={Resume} />
          <Route component={NoMatch} />
        </Switch>
      </>
      <Footer />
    </Router>
  )
}
export default App;

