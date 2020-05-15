import React from 'react';
import Navbar from './Nav';
import HomePage from './HomePage';
import About from './About';
import Content from './Content';
import Footer from './Footer';
import Stash from './Stash';
import ContentModal from './components/ContentModal';
import NotFoundPage from './NotFoundPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={About} />
            <Route path="/Content" exact component={Content} />
            <Route path="/Stash" exact component={Stash} />
            <Route path="/Content/:id" component={ContentModal} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
