import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import App from './App';
import Login from './Login';
import Signup from './Signup';

class Routes extends React.Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={Signup}/>
                </Switch>
            </Router>

        )
    }
}
export default Routes;