import React from 'react';

import Units from './units.jsx';

export default class Bmi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: "",
            weight: "",
            unit: {
                unit: "metric",
                heightUnit: "cm",
                weightUnit: "kg"
            }
        }
    }

    handleHeightChange = (event) => {
        if (event.target.value.match(/^[0-9]*$/)) {
            this.setState({
                height: Number(event.target.value)
            })
        }
    };

    handleWeightChange = (event) => {
        if (event.target.value.match(/^[0-9]*$/)) {
            this.setState({
                weight: Number(event.target.value)
            })
        }
    };

    handleReset = (event) => {
        this.setState({
            height: "",
            weight: ""
        })
    };

    handlePassUnits = (arg) => {
        this.setState({
            unit: arg
        })
    };

    render() {
        //calculating value of BMI
        let bmiVal = 0;
        let category = "You need to fill weight and height fields.";
        if (this.state.height !== "" && this.state.weight !== "") {
            if (this.state.unit.heightUnit === "cm" && this.state.unit.weightUnit === "kg") {
                bmiVal = Math.round((this.state.weight / ((this.state.height / 100) * (this.state.height / 100))) * 100) / 100;
            }
            else {
                bmiVal = Math.round((this.state.weight / ((this.state.height) * (this.state.height)) * 703) * 100) / 100;
            }
        }

        if (bmiVal !== 0) {
            if (bmiVal <= 15) {
                category = "Very severely underweight";
            } else if (bmiVal > 15 && bmiVal <= 16) {
                category = "Severely underweight"
            } else if (bmiVal > 16 && bmiVal <= 18.5) {
                category = "Underweight"
            } else if (bmiVal > 18.5 && bmiVal <= 25) {
                category = "Normal (healthy weight)"
            } else if (bmiVal > 25 && bmiVal <= 30) {
                category = "Overweight"
            } else if (bmiVal > 30 && bmiVal <= 35) {
                category = "Obese Class I (Moderately obese)"
            } else if (bmiVal > 35 && bmiVal <= 40) {
                category = "Obese Class II (Severely obese)"
            } else if (bmiVal > 40 && bmiVal <= 45) {
                category = "Obese Class III (Very severely obese)"
            } else if (bmiVal > 45 && bmiVal <= 50) {
                category = "Obese Class IV (Morbidly Obese)"
            } else if (bmiVal > 50 && bmiVal <= 60) {
                category = "Obese Class V (Super Obese)"
            } else if (bmiVal > 60) {
                category = "Obese Class VI (Hyper Obese)"
            }
        }

        return (
            <div className={"container"}>
                <div className="row">
                    <div className="col-12">
                        <Units passTo={this.handlePassUnits}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="bmi__inputs">
                            <h2 className={"bmi__title"}>Height:</h2>
                            <input value={this.state.height} className={"bmi__input"} type="text"
                                   onChange={this.handleHeightChange}/>
                            <p className={"bmi__subtitle"}>
                                {this.state.unit.heightUnit}
                            </p>
                            <h2 className={"bmi__title"}>Weight:</h2>
                            <input value={this.state.weight} className={"bmi__input"} type="text"
                                   onChange={this.handleWeightChange}/>
                            <p className={"bmi__subtitle"}>
                                {this.state.unit.weightUnit}
                            </p>
                            <button className={"bmi__reset"} onClick={this.handleReset}>
                                Reset fields
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="bmi__result">
                            <h3 className={"result__title"}>Your BMI is:</h3>
                            <p className="result__amount">
                                {bmiVal}
                            </p>
                            <p className="result__category">
                                {category}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
