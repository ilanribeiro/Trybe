import React from 'react';
import './App.css';
import './Form.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Form from './Form';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Home} />
      <Route path='/form' component={Form} />
    </BrowserRouter>
    );
}

export default App;
