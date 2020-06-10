import React from 'react';
import './App.css';
import View from './View';

class App extends React.Component {

  state = {
    display: '',
  }
//this function is adding the number to state but it is one input behind. if i click 7 it shows state
// as blank, but when i click the next number it show state as 7 
  addValue = (e) => {
    const { display } = this.state;
   if(e === 'c'){
     this.setState({
       display: ''
     })
   } else {
     let updateView = display + e
      this.setState({
        display: updateView,
      })
   }
   console.log(this.state)
  }

  equate = (str) => {
      //  match any character that is a digit at the beggining of the string.  + or 
      let mathArr = str.match(/[^\d()]+|[\d.]+/g);
      // turn the number strings into actual number objects and then go through the order of operations with the operators. turn [ '98', '*', '76543', '+', '345', '/', '678', '-', '12432' ] into 98 * 76543 + 345 / 678 - 12432
      if (mathArr.length > 3){
        alert('this calculator only does one function at a time')
        this.setState({
          display: '',
        })
      } else{
      let sum1
      for(let i = 1; i < mathArr.length -1; i = i + 2 )
      switch (mathArr[i]){
        case '/':
        sum1 = parseInt(mathArr[i - 1]) / parseInt(mathArr[i + 1])
        break;
        case '*':
        sum1 = parseInt(mathArr[i - 1]) * parseInt(mathArr[i + 1])
        break;
        case '-':
        sum1 = parseInt(mathArr[i - 1]) - parseInt(mathArr[i + 1])
        break;
        case '+':
        sum1 = parseInt(mathArr[i - 1]) + parseInt(mathArr[i + 1])
        break;
      }
      this.setState({
        display: `${sum1}`
      })
    }
  
  }

  render(){
  return (
    <div className="calculator">
      <View display={this.state.display}/>
      <button className="one" value='1' onClick={() => this.addValue(1)}>1</button>
      <button className="two" value='2'  onClick={() => this.addValue(2)} >2</button>
      <button className="three" value='3'  onClick={() => this.addValue(3)} >3</button>
      <button className="four" value='4'  onClick={() => this.addValue(4)} >4</button>
      <button className="five" value='5'  onClick={() => this.addValue(5)} >5</button>
      <button className="six" value='6'  onClick={() => this.addValue(6)} >6</button>
      <button className="seven" value='7'  onClick={() => this.addValue(7)} >7</button>
      <button className="eight" value='8'  onClick={() => this.addValue(8)} >8</button>
      <button className="nine" value='9'  onClick={() => this.addValue(9)} >9</button>
      <button className="plus" value='+'  onClick={() => this.addValue('+')} >+</button>
      <button className="minus" value='-'  onClick={() => this.addValue('-')} >-</button>
      <button className="mult" value='*'  onClick={() => this.addValue('*')} >*</button>
      <button className="div" value='/' onClick={() => this.addValue('/')}>/</button>
      <button className="clear" value='c'  onClick={() => this.addValue('c')} >c</button>
      <button className="equal" value='='  onClick={() => this.equate(this.state.display)} >=</button>
    </div>  
    );
  };

}

export default App;
