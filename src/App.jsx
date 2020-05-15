import React from 'react';
import './App.scss';
import Header from './components/header/Header'
import Main from './pages/main/Main';
import Category from './pages/category/Category';
import { Switch, Route, Redirect } from 'react-router-dom';
import Register from './pages/register/Register';
import { withRouter } from 'react-router';
import Product from './pages/product/Product';
import Footer from './components/footer/Footer';
import './pages/main/Main.scss';
import Dropdown from './components/Dropdown.jsx'

class App extends React.Component {
  render() {

    return (
      // <Dropdown />
      <div className="main-container">
        <Header />
        <section>
          <Switch>
            <Route path='/cat/:category' component={Category} />
            <Route path='/signin' component={Register} />
            <Route path='/product/:title' component={Product} />
            <Route exact path='/' component={Main} />
            <Redirect from='*' to='/' />
          </Switch>
        </section>
        <Footer />
      </div>
    )
  }
}
export default withRouter(App);
