import React from 'react';
import ReactDOM from 'react-dom';
export default class Bmi extends React.Component {
   constructor(props){
     super(props);
     this.state = {
         height: "",
         weight: "",
         unit: "metric",
         heightUnit: "cm",
         weightUnit: "kg"

     }
   }

    handleHeightChange = (event) => {
       if(event.target.value.match(/^[0-9]*$/)){
           this.setState({
               height: Number(event.target.value)
           })
       }
    };

    handleWeightChange = (event) => {
        if(event.target.value.match(/^[0-9]*$/)){
            this.setState({
                weight: Number(event.target.value)
            })
        }
    };
    handleImperialChange = (event) => {
        this.setState({
            unit: "imperial",
            heightUnit: "in",
            weightUnit: "lb"
        })
    }

    handleMetricChange = (event) => {
        this.setState({
            unit: "metric",
            heightUnit: "cm",
            weightUnit: "kg"
        })
    }

   render() {
       //calculating value of BMI
       let bmiVal = 0;
       let category = "You need to fill all fields.";
       if(this.state.height !== "" && this.state.weight !== ""){
           if(this.state.heightUnit === "cm" && this.state.weightUnit === "kg"){
               bmiVal = Math.round((this.state.weight / ((this.state.height / 100) * (this.state.height / 100)))*100)/100;
           }
           else{
               bmiVal = Math.round((this.state.weight / ((this.state.height) * (this.state.height)) * 703)*100)/100;
           }
       }

       if(bmiVal !== 0){
            if(bmiVal <= 15){
                category = "Very severely underweight";
            }else if(bmiVal > 15 && bmiVal <= 16){
                category = "Severely underweight"
            }else if(bmiVal > 16 && bmiVal <= 18.5){
                category = "Underweight"
            }else if(bmiVal > 18.5 && bmiVal <= 25){
                category = "Normal (healthy weight)"
            }else if(bmiVal > 25 && bmiVal <= 30){
                category = "Overweight"
            }else if(bmiVal > 30 && bmiVal <= 35){
                category = "Obese Class I (Moderately obese)"
            }else if(bmiVal > 35 && bmiVal <= 40){
                category = "Obese Class II (Severely obese)"
            }else if(bmiVal > 40 && bmiVal <= 45){
                category = "Obese Class III (Very severely obese)"
            }else if(bmiVal > 45 && bmiVal <= 50){
                category = "Obese Class IV (Morbidly Obese)"
            }else if(bmiVal > 50 && bmiVal <= 60){
                category = "Obese Class V (Super Obese)"
            }else if(bmiVal > 60){
                category = "Obese Class VI (Hyper Obese)"
            }
       }

     return (
         <div className={"container"}>
             <div className="bmi__units">
                 <h2 className="bmi__title">
                     Choose units:
                 </h2>
                 <label className="bmi__unit">Metric
                     <input type="radio" name={this.state.unit} checked={this.state.unit === "metric"}
                            onClick={this.handleMetricChange} />
                         <span className="checkmark"></span>
                 </label>

                 <label className="bmi__unit">Imperial
                     <input type="radio" name={"imperial"} checked={this.state.unit === "imperial"}
                            onClick={this.handleImperialChange} />
                         <span className="checkmark"></span>
                 </label>
             </div>
             <div className="bmi__inputs">
                 <h2 className={"bmi__title"}>Height:</h2>
                 <input value={this.state.height} className={"bmi__input"} type="text"
                 onChange={this.handleHeightChange}/>{this.state.heightUnit}
                 <h2 className={"bmi__title"}>Weight:</h2>
                 <input value={this.state.weight} className={"bmi__input"} type="text"
                 onChange={this.handleWeightChange}/>{this.state.weightUnit}
             </div>
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

     )
   }
 }
