import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './Login.jsx';

class Main extends React.Component {
    constructor(props) {
        super(props);
    };

    render () {
        return (
            <div>
                <Router>
                    <div>
                    <Route path="/" render={(props) => (<Login />)} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default Main