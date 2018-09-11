import React from 'react';
import ReactDOM from 'react-dom';
export default class Bmi extends React.Component {
   constructor(props){
     super(props);
     this.state = {
         height: "",
         weight: ""
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

   render() {
       //calculating value of BMI
       let bmiVal = 0;
       if(this.state.height !== "" && this.state.weight !== ""){
           bmiVal = (this.state.weight / ((this.state.height / 100) * (this.state.height / 100)));
       }

     return (
         <div className={"container"}>
             <div className="bmi__inputs">
                 <h2 className={"bmi__title"}>Height:</h2>
                 <input value={this.state.height} className={"bmi__input"} type="text"
                 onChange={this.handleHeightChange}/>
                 <h2 className={"bmi__title"}>Weight:</h2>
                 <input value={this.state.weight} className={"bmi__input"} type="text"
                 onChange={this.handleWeightChange}/>
             </div>
             <div className="bmi__result">
             <h3 className={"result__title"}>Your BMI is:</h3>
             <p className="result__amount">
                 {bmiVal}
             </p>
             <p className="result__category">
                 everything is ok
             </p>
             </div>

         </div>

     )
   }
 }
