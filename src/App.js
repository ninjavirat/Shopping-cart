import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { AppProvider } from './context-provider/AppContext'
import { Products } from './components/Products';
import { Cart } from './components/Cart';

function App() {

  return (
    <AppProvider>
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </AppProvider>
  );
}

export default App;
