import { Component } from 'react';
import Header from '../header/header';
import Dashboard from '../dashboard/dashboard';
import About from '../about/about';
import Store from '../store/store';
import Footer from '../footer/footer';

import coffeeBeans from '../../assets/images/coffeeBeans.jpg';
import coffeePresto from '../../assets/images/coffeePresto.jpg';
import coffeeAromistico from '../../assets/images/coffeeAromistico.jpg';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, title: 'Solimo Coffee Beans 2 kg', price: 12.49, image: coffeeBeans},
        {id: 2, title: 'Presto Coffee Beans 1 kg', price: 15.99, image: coffeePresto},
        {id: 3, title: 'AROMISTICO Coffee 1 kg', price: 6.99, image: coffeeAromistico},
    ],
    }
  }

  render() {
    const {data} = this.state;

    return (
      <div className="app">
        <Header />
        <main>
          <Dashboard />
          <About />
          <Store data={data}/>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
