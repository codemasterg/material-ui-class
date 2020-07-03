import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/styles';
import Header from './ui/Header/Header';
import Footer from './ui/Footer/Footer';
import theme from './ui/Theme';
import LandingPage from './ui/LandingPage/LandingPage'

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

  // Hooks
  const [menuItemSelectedIndex, setMenuItemSelectedIndex] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header tabIndex={tabIndex} setTabIndex={setTabIndex} menuItemSelectedIndex={menuItemSelectedIndex} setMenuItemSelectedIndex={setMenuItemSelectedIndex} />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/services" component={() => <div style={ {height: "650px"}}>Services Page</div>} />
          <Route exact path="/customsoftware" component={() => <div style={ {height: "650px"}}>Custom SW Page</div>} />
          <Route exact path="/mobileapps" component={() => <div style={ {height: "650px"}}>Mobile Page</div>} />
          <Route exact path="/websites" component={() => <div style={ {height: "650px"}}>Websites Page</div>} />
          <Route exact path="/revolution" component={() => <div style={ {height: "650px"}}>Revolution Page</div>} />
          <Route exact path="/about" component={() => <div style={ {height: "650px"}}>About Page</div>} />
          <Route exact path="/contact" component={() => <div style={ {height: "650px"}}>Contact Page</div>} />
          <Route exact path="/estimate" component={() => <div style={ {height: "650px"}}>Estimate Page</div>} />
        </Switch>
        <Footer tabIndex={tabIndex} setTabIndex={setTabIndex} menuItemSelectedIndex={menuItemSelectedIndex} setMenuItemSelectedIndex={setMenuItemSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
