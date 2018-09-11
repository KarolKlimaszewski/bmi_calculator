import React from "react";

export default class Units extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            unit: "metric",
            heightUnit: "cm",
            weightUnit: "kg"
        }
    }

    handleMetricChange = (event) => {
        this.props.passTo({
            'unit': "metric",
            'heightUnit': "cm",
            'weightUnit': "kg",
        });
        this.setState({
            unit: "metric"
        })
    }

    handleImperialChange = (event) => {
        this.props.passTo({
            'unit': "imperial",
            'heightUnit': "in",
            'weightUnit': "lb",
        });
        this.setState({
            unit: "imperial"
        })
    }

    render() {
        return (
            <div className="bmi__units">
                <h2 className="bmi__title">
                    Choose units:
                </h2>
                <label className="bmi__unit">Metric
                    <input type="radio" name={"metric"} checked={this.state.unit === "metric"}
                           onClick={this.handleMetricChange} onTouchStart={this.handleMetricChange} />
                    <span className="checkmark"></span>
                </label>

                <label className="bmi__unit">Imperial
                    <input type="radio" name={"imperial"} checked={this.state.unit === "imperial"}
                           onClick={this.handleImperialChange} onTouchStart={this.handleImperialChange} />
                    <span className="checkmark"></span>
                </label>
            </div>
        );
    }
}