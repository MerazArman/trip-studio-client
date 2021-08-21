import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import CheckoutForm from "./components/CheckoutPage/CheckoutForm/CheckoutForm";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage/CheckoutPage";
import AddService from "./components/DashboardPage/AdminPage/AddService/AddService";
import AllBookings from "./components/DashboardPage/AdminPage/AllBookings/AllBookings";
import AllServices from "./components/DashboardPage/AdminPage/AllServices/AllServices";
import UsersBookings from "./components/DashboardPage/UsersPage/UsersBookings/UsersBookings";
import HomePage from "./components/HomePage/HomaPage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage/LoginPage";
import NotFound from "./components/NotFound/NotFound";

export const UserContext = createContext();

function App() {

  const [userLogged, setUserLogged] = useState({});

  return (
    <UserContext.Provider value={[userLogged, setUserLogged]}>
    <Router >
      <Switch>
        <Route exact path="/"> <HomePage></HomePage> </Route>
        <Route path="/home"> <HomePage></HomePage>  </Route>
        <Route path="/checkoutPage:serviceId"> <CheckoutPage></CheckoutPage> </Route>
        <Route path='/AllServices'> <AllServices></AllServices> </Route>
        <Route path='/AllBookings'> <AllBookings></AllBookings> </Route>
        <Route path='/UsersBookings'> <UsersBookings></UsersBookings> </Route>
        <Route path='/AddService'> <AddService></AddService> </Route>
        <Route path='/showAllBookings/bookingId'>  </Route>
        <Route path="/loginPage"> <LoginPage></LoginPage> </Route>
        <Route path="*"> <NotFound></NotFound> </Route>
      </Switch>
    </Router>

  </UserContext.Provider>
  );
}

export default App;
