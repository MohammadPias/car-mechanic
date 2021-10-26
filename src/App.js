import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddService from './pages/AddService/AddService';
import BookService from './pages/BookService/BookService';
import DeleteService from './pages/DeleteService/DeleteService';
import Home from './pages/Home/Home/Home';
import Login from './pages/login/Login/Login';
import PrivateRoute from './pages/login/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound'
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div className="App">
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
            <PrivateRoute path="/booking/:serviceId">
              <BookService></BookService>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/deleteService">
              <DeleteService></DeleteService>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
