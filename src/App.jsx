import 'regenerator-runtime/runtime';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import React, { useEffect } from 'react';

import GistCreate from './pages/GistCreate';
import Dashboard from './pages/Dashboard';
// import Settings from './pages/Settings';
import Gist from './pages/Gist';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
// import User from './pages/User';

import PrimaryNav from './components/Navbar';

import translations from './translations/en-US.json';

const queryClient = new QueryClient();

const NAVBAR_SUPRESSION_ROUTES = [
  '/',
  '/register',
  '/login',
];

const App = () => {
  useEffect(() => console.log('app booted up'));

  return (
    <IntlProvider messages={translations} defaultLocale="en">
      <QueryClientProvider client={queryClient}>
        <Router>
          {!NAVBAR_SUPRESSION_ROUTES.includes(window.location.pathname) && <PrimaryNav />}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/create" exact component={GistCreate} />
            <Route path="/gist/:id" exact component={Gist} />
            <Route component={() => <h1>404</h1>} />
          </Switch>
        </Router>
      </QueryClientProvider>
    </IntlProvider>
  );
};

export default App;
