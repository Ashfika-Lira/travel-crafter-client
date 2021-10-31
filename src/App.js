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
