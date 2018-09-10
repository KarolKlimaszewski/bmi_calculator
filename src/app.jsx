import React from 'react';
import ReactDOM from 'react-dom';

require('./scss/main.scss');

import Bmi from './components/bmi.jsx';
import Header from './components/header.jsx';

class App extends React.Component {
   constructor(props){
     super(props);

   }
   render() {
     return (
         <div>
             <Header />
             <Bmi />
         </div>
     )
   }
 }

document.addEventListener("DOMContentLoaded", function(){

  ReactDOM.render(
      <App />,
    document.querySelector('#app')
  )

})
