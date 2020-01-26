import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from '../node_modules/react-router-dom'

import App from './App';
import BMI from './components/BMI'
import Calculator from './components/Calculator'
import Unitconversion from './components/BMI'
import { MDBCard } from 'mdbreact'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



const myRouter = (<Router>
    <div align="center">
        <MDBCard style={{ alignment: "center" }}>
            <ul>
                <Link to="/" style={{ WebkitTextFillColor: "white" }}><button class="btn btn-black" >Home</button></Link>
                <Link to="/BMI" style={{ WebkitTextFillColor: "white" }} > <button class="btn btn-black">BMI</button></Link>
                <Link to="/Calculator" style={{ WebkitTextFillColor: "white" }} > <button class="btn btn-black">Calc</button></Link>

            </ul>
        </MDBCard>
        <Route exact path="/" component={App} />
        <Route path="/BMI" component={BMI} />
        <Route path="/Calculator" component={Calculator} />

    </div>
</Router >)
ReactDOM.render(myRouter, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
