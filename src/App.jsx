import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useEffect } from 'react';

import GistCreate from './pages/GistCreate';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Gist from './pages/Gist';
import Home from './pages/Home';
import User from './pages/User';

import PrimaryNav from './components/Navbar';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => console.log('app booted up'));

  return (
    <QueryClientProvider client={queryClient}>
      <PrimaryNav />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/gist/:id" component={Gist} />
        <Route path="/gist" component={GistCreate} />
        <Route path="/user/:id" component={User} />
        <Route path="/user/:id/settings" component={Settings} />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
