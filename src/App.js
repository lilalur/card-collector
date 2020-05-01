import React from 'react';
import Navbar from './Nav';
import About from './About';
import Content from './Content';
import Footer from './Footer';
import ContentDetail from './ContentDetail';
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
            <Route path="/Content/:id" component={ContentDetail} />
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
