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
      ourData: [
        {id: 1, title: 'AROMISTICO Coffee 1 kg', price: 6.99, image: coffeeAromistico, country: 'Brasil'},
        {id: 2, title: 'AROMISTICO Coffee 1 kg', price: 6.99, image: coffeeAromistico, country: 'Kenya'},
        {id: 3, title: 'AROMISTICO Coffee 1 kg', price: 6.99, image: coffeeAromistico, country: 'Columbia'},
        {id: 4, title: 'AROMISTICO Coffee 1 kg', price: 6.99, image: coffeeAromistico, country: 'Brasil'},
        {id: 5, title: 'AROMISTICO Coffee 1 kg', price: 6.99, image: coffeeAromistico, country: 'Brasil'},
        {id: 6, title: 'AROMISTICO Coffee 1 kg', price: 6.99, image: coffeeAromistico, country: 'Brasil'},
      ],
      term: '',
      tabs: 'all',
    }
  }

  handlePageChange = (page) => {
    this.setState({page});
  }

  searchPost = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.title.indexOf(term) > -1;
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  tabsPost = (items, tabs) => {
    switch (tabs) {
      case 'Brasil':
        return items.filter(item => item.country === 'Brasil');
        case 'Kenya':
          return items.filter(item => item.country === 'Kenya');
        case 'Columbia':
          return items.filter(item => item.country === 'Columbia');
        default:
          return items;
    };
  }

  onTabsSelect = (tabs) => {
    this.setState({tabs});
  }

  render() {
    const {data, ourData, term, tabs} = this.state;
    const visibleData = this.tabsPost(this.searchPost(ourData, term), tabs);

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
              <OurStore ourData={visibleData} onUpdateSearch={this.onUpdateSearch} onTabsSelect={this.onTabsSelect} />
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
