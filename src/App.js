import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './componets/header';
import HomePage from './pages/home-page';
import FromCssPage from './pages/from-css-page';
import AttrsPage from './pages/attrs-page';
import AnimationPage from './pages/animation-page';
import ThemePage from './pages/theme-page';

import { themes } from './themes/theme-context';

import { Button } from './componets/buttons.js';
import { Span, PageContent, PageInner, PageWrapper, Flex } from './componets/general.js';

function Toolbar(props) {
  return (
      <Flex>
          <Span>{props.themeName} theme</Span>
          <Button onClick={props.switchTheme}>Switch theme</Button>
      </Flex>
  );
}

function App() {
    const [theme, setTheme] = useState(themes.themeFst);
    const switchTheme = () => {
        theme === themes.themeSec ? setTheme(themes.themeFst) : setTheme(themes.themeSec);
        console.log({ theme });
    };
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <PageWrapper>
                  <PageInner>
                    <Header><Toolbar themeName={theme.name} switchTheme={switchTheme}/></Header>
                    <PageContent>
                    <Switch>
                        <Route path="/themes">
                            <ThemePage />
                        </Route>
                        <Route path="/from-css">
                            <FromCssPage />
                        </Route>
                        <Route path="/attrs">
                            <AttrsPage />
                        </Route>
                        <Route path="/animation">
                            <AnimationPage />
                        </Route> 
                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                    </PageContent>
                    </PageInner>
                </PageWrapper>
            </ThemeProvider>
        </Router>
    );
}

export default App;
