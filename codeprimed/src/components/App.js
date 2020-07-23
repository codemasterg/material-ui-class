import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/styles';
import Header from './ui/Header/Header';
import Footer from './ui/Footer/Footer';
import theme from './ui/Theme';
import LandingPage from './ui/LandingPage/LandingPage';
import Skills from './ui/Skills/Skills';
import Experience from './ui/Experience/Experience';
import Resume from './ui/Resume/Resume';
import Contact from './ui/Contact/Contact';
import About from './ui/About/About'

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
          <Route exact path="/skills" render={props => <Skills {...props} setTabIndex={setTabIndex} />} />  {/* use render when you need to pass props on a route*/}
          <Route exact path="/experience" render={props => <Experience {...props} setTabIndex={setTabIndex} />} />
          <Route exact path="/resume" render={props => <Resume {...props} setTabIndex={setTabIndex} />} />
          <Route exact path="/resume.pdf" render={() => {
             window.open('https://master.d15x40ji9kfba4.amplifyapp.com/resume.pdf'); return <Redirect to="/resume"/>;  // after opening pdf in new tab, redirect so original page still shows resume
          }} />
          <Route exact path="/about" render={props => <About {...props} setTabIndex={setTabIndex} />} />
          <Route exact path="/contact" render={props => <Contact {...props} setTabIndex={setTabIndex} />} />
        </Switch>
        <Footer tabIndex={tabIndex} setTabIndex={setTabIndex} menuItemSelectedIndex={menuItemSelectedIndex} setMenuItemSelectedIndex={setMenuItemSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
