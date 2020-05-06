import React from 'react';
import Navbar from './Nav';
import About from './About';
import Content from './Content';
import Footer from './Footer';
import Stash from './Stash';
import ContentModal from './ContentModal';
import NotFoundPage from './NotFoundPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/Content" exact component={Content} />
            <Route path="/Stash" exact component={Stash} />
            <Route path="/Content/:id" component={ContentModal} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="text-center mt-5"><h1>Card collector</h1></div>
);

export default App;
