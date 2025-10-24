import { Component } from 'react';
import Header from '../header/header';
import Dashboard from '../dashboard/dashboard';
import About from '../about/about';
import Store from '../store/store';
import Footer from '../footer/footer';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <Dashboard />
          <About />
          <Store />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
