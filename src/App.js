import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Service from './components/pages/Service';
import Products from './components/pages/Products';
import NavBar from './components/NavBar';
import Contact from './components/Contact'
import Footer from './components/Footer'

 


function App() {
  return (
    <div className="App">
      <Router basename='/'>
      <NavBar />
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/About' exact component={About} />
      <Route path='/Service' exact component={Service} />
      <Route path='/Products' exact component={Products} />
      </Switch>
      <Contact />
      <Footer /> 
      </Router>
    </div>
  );
}

export default App;
