import React from "react";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <header className="header">
                <h1 className={"header__title"}>
                    BMI calculator
                </h1>
                <img className={"header__logo"} src={require("../../images/weight.png")} alt="BMI Calculator - logo"/>
            </header>
        );
    }
}