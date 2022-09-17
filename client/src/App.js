import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home'


class App extends Component {

    render() {
        return (
            <div>                
                <Router>        
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        
                        <Route path="/pageNotFound" component={ PageNotFound } />                      
                        <Redirect to="/pageNotFound" />
                    </Switch>
                </Router>     
                
          </div>
        );
    }
}


export default App;
