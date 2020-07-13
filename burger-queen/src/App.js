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
import NotFound from './components/login/NotFound'
import './style/style.css';


function App() {
  return (
    <Router>
      <div className="container"> 

        <Switch>
            <Route path="/"  exact>
                <LogIn />
            </Route> 
            <Route path="/menu" >
                <Menu />
            </Route>
            <Route path="/userlist" >
                <UserList />
            </Route>
            <Route path="/productlist" >
                <ProductList />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>

      </div>
    </Router>
  )
}

export default App;