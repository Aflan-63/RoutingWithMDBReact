import React from 'react';
import logo from './logo.svg';
import { MDBRow, MDBCol, MDBView, MDBMask } from 'mdbreact'
import './App.css';
import Calculator from './components/Calculator'


// export default () => 

function App() {
    return (
        <div class="container">
            <img src="https://i.pinimg.com/originals/3b/d5/a7/3bd5a78fede2560fc13ed5d55aa42538.jpg" alt="Norway" style={{width:"100%"}} />
            <div class="text-block">
                <h5>Welcome</h5>
                <p>Go through the menus</p>
            </div>
        </div>
        // // {/* <div class="container">
        //     <img src="https://i.pinimg.com/originals/3b/d5/a7/3bd5a78fede2560fc13ed5d55aa42538.jpg" />
        //     <div class="bottom-left">Bottom Left</div>
        //     <div class="top-left">Top Left</div>
        //     <div class="top-right">Top Right</div>
        //     <div class="bottom-right">Bottom Right</div>
        //     <div class="centered">Centered</div>
        // </div> */}

    );
}

// background: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full%20page/img%20%283%29.jpg")no-repeat center center fixed;


export default App;