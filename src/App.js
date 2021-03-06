import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';
import AuthProvider from './Pages/Context/AuthProvider';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AddService from './Pages/AddService/AddService';
import Services from './Pages/Services/Services';
import ControlOrders from './Pages/ControlOrders/ControlOrders';
import TourDetails from './Pages/TourDetails/TourDetail';
import Schedule from './Pages/Schedule/Schedule';
import Orders from './Pages/Orders/Orders';


function App() {
  return (
    <div>
      <AuthProvider>
     <Router>
       <Header></Header>
       <Switch>
       <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
       <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path='/addService'>
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path='/services'>
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path='/order/control'>
              <ControlOrders></ControlOrders>
            </PrivateRoute>
            <PrivateRoute path='/details/:id'>
              <TourDetails></TourDetails>
            </PrivateRoute>
            <PrivateRoute path='/schedule'>
              <Schedule></Schedule>
            </PrivateRoute>
            <PrivateRoute path='/orders'>
              <Orders></Orders>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
       </Switch>
       <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
