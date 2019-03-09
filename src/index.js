import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route,BrowserRouter as Router, Link} from 'react-router-dom';
import Home from './Home';
import Students from './Students';
import Classes from './Classes';

const routing=(
    <Router>
        <div>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Students">Students</Link>
                    </li>
                    <li>
                        <Link to="/Classes">Classes</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Route exact path="/" component={Home}/>
                <Route  path="/Students" component={Students}/>
                <Route  path="/Classes" component={Classes}/>
            </div>
        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
