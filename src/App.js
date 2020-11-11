import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Home from './components/Home/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { useEffect } from 'react';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 700
    })
  }, []);

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/home'>
          <Home />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/signup'>
          <SignUp />
        </Route>

        <PrivateRoute path='/dashboard'>
          <Dashboard />
        </PrivateRoute>

        <Route path='*'>
          <PageNotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
