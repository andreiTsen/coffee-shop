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
import OurDashboard from '../ourDashboard/ourDashboard';
import OurAbout from '../ourAbout/ourAbout';
import OurStore from '../ourStore/ourStore';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'main',
      data: [
        {id: 1, title: 'Solimo Coffee Beans 2 kg', price: 12.49, image: coffeeBeans},
        {id: 2, title: 'Presto Coffee Beans 1 kg', price: 15.99, image: coffeePresto},
        {id: 3, title: 'AROMISTICO Coffee 1 kg', price: 6.99, image: coffeeAromistico},
      ],
      countries: [
        {id: 1, name: 'Brasil'},
        {id: 2, name: 'Kenya'},
        {id: 3, name: 'Columbia'},
      ]
    }
  }

  handlePageChange = (page) => {
    this.setState({page});
  }

  render() {
    const {data} = this.state;
    const {countries} = this.state;

    switch (this.state.page) {
      case 'main':
        return (
          <div className="app">
            <Header onNavigate = {this.handlePageChange} />
            <main>
              <Dashboard />
              <About />
              <Store data={data}/>
            </main>
            <Footer />
          </div>
        )
      case 'ourCoffee':
        return (
          <div className="app">
            <Header onNavigate = {this.handlePageChange} />
            <main>
              <OurDashboard />
              <OurAbout />
              <OurStore data={data} countries={countries} />
            </main>
            <Footer/>
          </div>
        )
      default:
        return (
          <div className="app">
            <Header onNavigate = {this.handlePageChange} />
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
}

export default App;
