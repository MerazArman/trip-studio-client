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
import MakeAdmin from "./components/DashboardPage/AdminPage/MakeAdmin/MakeAdmin";
import UsersBookings from "./components/DashboardPage/UsersPage/UsersBookings/UsersBookings";
import HomePage from "./components/HomePage/HomaPage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage/LoginPage";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ServiceDetailsPage from "./components/ServiceDetailsPage/ServiceDetailsPage/ServiceDetailsPage";

export const UserContext = createContext();

function App() {

  const [userLogged, setUserLogged] = useState({});

  return (
    <UserContext.Provider value={[userLogged, setUserLogged]}>
    <Router >
      <Switch>
        <Route exact path="/"> <HomePage></HomePage> </Route>
        <Route path="/home"> <HomePage></HomePage>  </Route>
        <PrivateRoute path="/checkoutPage/:serviceId"> <CheckoutPage></CheckoutPage> </PrivateRoute>
        <PrivateRoute path='/AllServices'> <AllServices></AllServices> </PrivateRoute>
        <PrivateRoute path='/AllBookings'> <AllBookings></AllBookings> </PrivateRoute>
        <PrivateRoute path='/UsersBookings'> <UsersBookings></UsersBookings> </PrivateRoute>
        <PrivateRoute path='/AddService'> <AddService></AddService> </PrivateRoute>
        <PrivateRoute path='/makeAdmin'> <MakeAdmin></MakeAdmin> </PrivateRoute>
        <Route path='/servicesDetailsPage/:serviceKey'> <ServiceDetailsPage></ServiceDetailsPage> </Route>
        <Route path="/loginPage"> <LoginPage></LoginPage> </Route>
        <Route path="*"> <NotFound></NotFound> </Route>
      </Switch>
    </Router>

  </UserContext.Provider>
  );
}

export default App;
