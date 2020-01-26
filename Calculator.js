import React, { Component } from 'react'
import '../styles/Calculator.css'
import { MDBCard, MDBContainer, MDBInput } from 'mdbreact'
export default class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            fnumber: 0,
            snumber: 0,
            add: 0,
            sub: 0,
            sum: 0,
            div: 0,
            result: 0
        }
    }
    //Handles user input
    onChangeHandler = (event) => {
        var newName = event.target.name;
        var newValue = event.target.value;
        this.setState({ [newName]: newValue });
        //console.log(newName+"    "+newValue);
    }
    // Handles Calculator Input Status
    calculatorCheck(newName) {
        //console.log("Checking "+event.taget.name)
        // if (this.state.snumber === 0 && newName === "div") {
        //     alert("Invalid Input");
        //     return false;
        // }
        if (this.state.fnumber === 0 && this.state.snumber === 0) alert("invalid");
        else return true;
        //console.log("Checking "+event.taget.name)
    }
    //Shows result
    calculatorHandler = (event) => {
        var newName = event.target.name;
        //var newValue = event.target.value;

        let status = this.calculatorCheck(newName);
        var a = Number(this.state.fnumber);
        var b = Number(this.state.snumber);
        if (status === true) {
            switch (newName) {
                case "sum":
                    //console.log("sum");
                    this.setState({ result: a + b });
                    break;
                case "sub":

                    this.setState({ result: (a - b) });
                    //console.log("sub");
                    break;
                case "div":

                    this.setState({ result: (a / b) });
                    //console.log("div");
                    break;
                case "mul":

                    this.setState({ result: (a * b) });
                    //console.log("mul");
                    break;
                default:
                    alert("Invalid");
            }
        }
    }

    render() {
        return (
            <div align="center">
                <MDBCard style={{ width: "22rem", alignment: "center" }}>
                    <div style={{ margin: 20, padding: 20, alignItems: "center" }} >
                        <h1>Calculator</h1>
                        <br></br>
                        <div align="center">
                            <MDBCard style={{ alignment: "center" }}>
                                <h1 className="text-center">{this.state.result}</h1>
                            </MDBCard>
                        </div>
                        <div>
                            <form>
                                <MDBInput name="fnumber" onChange={this.onChangeHandler} type="number" label="First number" />
                                <MDBInput name="snumber" onChange={this.onChangeHandler} type="number" label="Second number" />
                                <br></br>
                            </form>
                        </div>

                        <div align="center">
                            <div align="center" className="btn-toolbar" role="group" >
                                <MDBCard style={{ width: "20rem", alignment: "center" }}>
                                    <button name="sum" type="button" onClick={this.calculatorHandler} class="btn btn-amber">+</button>
                                    <button name="sub" type="button" onClick={this.calculatorHandler} class="btn btn-amber">-</button>
                                    <button name="div" type="button" onClick={this.calculatorHandler} class="btn btn-amber">/</button>
                                    <button name="mul" type="button" onClick={this.calculatorHandler} class="btn btn-amber">*</button>
                                </MDBCard>
                            </div>
                        </div>

                    </div >
                </MDBCard>
            </div>
        )
    }
}
