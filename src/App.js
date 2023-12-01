// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './components/Auth/Registration';
import Login from './components/Auth/Login';
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/auth/registration" component={Registration} />
        <Route path="/auth/login" component={Login} />
        <Route path="/user" component={UserPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/todo" component={TodoPage} />
      </Switch>
    </Router>
  );
}

export default App;
