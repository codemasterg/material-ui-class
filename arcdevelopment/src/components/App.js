import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/styles';
import Header from './ui/Header/Header';
import theme from './ui/Theme';

/**
 * Dependencies:
 * sudo npm install -g create-react-app  (one time for machine)
   sudo npm install react
   sudo npm install react-router
   npm install @material-ui/core
   npm install @material-ui/styles
   sudo npm install @material-ui/icons
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home Page</div>} />
          <Route exact path="/services" component={() => <div>Services Page</div>} />
          <Route exact path="/customsoftware" component={() => <div>Custom SW Page</div>} />
          <Route exact path="/mobileapps" component={() => <div>Mobile Page</div>} />
          <Route exact path="/websites" component={() => <div>Websites Page</div>} />
          <Route exact path="/revolution" component={() => <div>Revolution Page</div>} />
          <Route exact path="/about" component={() => <div>About Page</div>} />
          <Route exact path="/contact" component={() => <div>Contact Page</div>} />
          <Route exact path="/estimate" component={() => <div>Estimate Page</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
