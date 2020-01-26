import React, { Component } from 'react'
import { MDBCard, MDBContainer, MDBInput } from 'mdbreact'
export default class BMI extends Component {
    constructor() {
        super();
        this.state = {
            height: 0,
            weight: 0,
            Cbmi: 0,
            statement: ""
        }
    }
    calculateBMI() {
        var height = this.state.height;
        console.log("height: "+height);
        var weight = this.state.weight;
        console.log("weight: "+weight)
        var bmi = ((weight) / (height * height));
        console.log(this.state.bmi)
        this.setState({ Cbmi: bmi })
        console.log(this.state.Cbmi)
        if (bmi >= 30) this.setState({ statement: "Very Overweight" });
        else if (bmi >= 25 && bmi < 30) this.setState({ statement: "Obese" });
        else if (bmi >= 18.5 && bmi < 25) this.setState({ statement: "Normal" });
        else this.setState({ statement: "Underweight" });
        return bmi;
    }
    onChangeHandler = (event) => {
        var newName = event.target.name;
        var newValue = event.target.value;
        this.setState({ [newName]: newValue });
    }
    calculatorHandler = () => {
        var BMI = this.calculateBMI();
    }
    render() {
        return (
            <div>
                <div align="center">
                    <MDBCard style={{ width: "22rem", alignment: "center" }}>
                        <div style={{ margin: 20, padding: 20, alignItems: "center" }} >
                            <h1>BMI</h1>
                            <br></br>
                            <div align="center">
                                <MDBCard style={{ alignment: "center" }}>
                                    <h1 className="text-center">BMI: {this.state.Cbmi}</h1>
                                    <h1 className="text-center">{this.state.statement}</h1>
                                </MDBCard>
                            </div>
                            <div>
                                <form>
                                    <MDBInput name="height" onChange={this.onChangeHandler} type="number" label="Your height in m" />
                                    <MDBInput name="weight" onChange={this.onChangeHandler} type="number" label="Your weight in kg" />
                                    <br></br>
                                </form>
                            </div>

                            <div align="center">
                                <div align="center" className="btn-toolbar" role="group" >
                                    <MDBCard style={{ width: "20rem", alignment: "center" }}>
                                        <button name="sum" type="button" onClick={this.calculatorHandler} class="btn btn-amber">Calculate BMI</button>

                                    </MDBCard>
                                </div>
                            </div>

                        </div >
                    </MDBCard>
                </div>
            </div>
        )
    }
}
