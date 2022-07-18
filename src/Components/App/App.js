import React from 'react';
import InputComponent from '../InputComponent';
import InputComponentFun from '../InputComponentFun/InputComponentFun.component';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);
    this.someRef=React.createRef();
  }

  render(){
  return (
    <div className="test">
      This is a test
      <InputComponent></InputComponent>
      <InputComponentFun ref={this.someRef}></InputComponentFun>
      <button onClick={()=>{
        this.someRef.current.focus();
      }}>focus on Functional input</button>
    </div>
  );
  }
}

export default App;
