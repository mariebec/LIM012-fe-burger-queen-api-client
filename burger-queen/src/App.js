import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LogIn from './components/login/LogIn';
import Menu from './components/order/Menu';
import UserList from './components/admin/UserList';
import ProductList from './components/admin/ProductList';
import './style/style.css';


function App() {
  return (
    <Router>
      <div className="container"> 

        <Switch>
          <Route path="/" exact>
            <LogIn />
          </Route> 
          <Route path="/menu" exact>
            <Menu />
          </Route>
          <Route path="/userlist" exact>
            <UserList />
          </Route>
          <Route path="/productlist" exact>
            <ProductList />
          </Route>
        </Switch>

      </div>
    </Router>
  )
}

export default App;