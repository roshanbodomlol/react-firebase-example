import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/__elements/Header';
import Footer from './components/__elements/Footer';
import Home from './components/__screens/Home';
import SignIn from './components/__screens/SignIn';
import NotFound from './components/__screens/NotFound';
import Profile from './components/__screens/__Secure/Profile';
import sitemap from './routing/sitemap';

function App() {
  return (
    <div id="wrapper">
      <Header/>

      <main>
        <Switch>
          <Route exact path={sitemap.home} component={Home}/>
          <Route exact path={sitemap.signIn} component={SignIn}/>
          <Route exact path={sitemap.notFound} component={NotFound}/>
          <PrivateRoute>
            <Route exact path={sitemap.profile} component={Profile}/>
          </PrivateRoute>
          <Redirect to={sitemap.notFound}/>
        </Switch>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
