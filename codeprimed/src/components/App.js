import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/styles';
import Header from './ui/Header/Header';
import Footer from './ui/Footer/Footer';
import theme from './ui/Theme';
import LandingPage from './ui/LandingPage/LandingPage';
import Experience from './ui/Experience/Experience';

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
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/design" component={() => <div style={ {height: "650px"}}>Architecture and Design Page</div>} />
          <Route exact path="/languages" component={() => <div style={ {height: "650px"}}>Langs Page</div>} />
          <Route exact path="/frameworks" component={() => <div style={ {height: "650px"}}>Frameworks Page</div>} />
          <Route exact path="/webservices" component={() => <div style={ {height: "650px"}}>Webservices Page</div>} />
          <Route exact path="/databases" component={() => <div style={ {height: "650px"}}>Databases Page</div>} />
          <Route exact path="/projects" component={() => <div style={ {height: "650px"}}>Past Projects Page</div>} />
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
