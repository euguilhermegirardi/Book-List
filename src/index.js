import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Author from './Pages/Authors/Author';
import Books from './Pages/Books/Books';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={App} />
      <Route path='/author' component={Author} />
      <Route path='/books' component={Books} />
      <Route path='/about' component={About} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
