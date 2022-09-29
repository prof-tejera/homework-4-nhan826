import { useState } from "react";
import Number from "../Number/Number";
import Operation from "../Operation/Operation";
import Screen from "../Screen/Screen";
import "./Calculator.css"


const Calculator = () => {

  // calculator state — set to empty string
  const [curScreenVal, setCurScreenVal] = useState("");
  
  // on number click:
  const handleNumberClick = (value) => {
    setCurScreenVal(curScreenVal + value);  // current value appended with entered value
  };

 // on operation click:
  const handleOperationClick = (operation) => {
    if(operation === "C"){
      setCurScreenVal("");  // clears screen (sets to empty string)
      return
    }
    // if equals sign pressed:
    if(operation === "="){
      if(curScreenVal.split("+").length ===2){ // if two operands:
        const [firstNum, secondNum] = curScreenVal.split("+");   // splits into first and second operands
        setCurScreenVal((parseInt(firstNum)+parseInt(secondNum)).toString());  // performs calculation — updates value
        return;
      }else if(curScreenVal.split("-").length ===2){
        const [firstNum, secondNum] = curScreenVal.split("-");
        setCurScreenVal((parseInt(firstNum) - parseInt(secondNum)).toString());
        return;
      }else if(curScreenVal.split("x").length ===2){
        const [firstNum, secondNum] = curScreenVal.split("x");
        setCurScreenVal((parseInt(firstNum) * parseInt(secondNum)).toString());
        return;
      }else if(curScreenVal.split("/").length ===2){
        const [firstNum, secondNum] = curScreenVal.split("/");
        setCurScreenVal((parseInt(firstNum) / parseInt(secondNum)).toString());
        return;
      }

    } 
    const operationExists = ['x', '-', '+', '/'].some(
      (o) => curScreenVal.includes(o)
    );
    // checks if operation already entered
    if(operationExists){
      return
    }

    setCurScreenVal(curScreenVal + operation)
  };

  return (
    <div className = "CalcStyle">
      <Screen value={curScreenVal}/>
      <div className = "CalcContain">
        <div className = "NumContain">
          <Number value={7} onClick={handleNumberClick} />
          <Number value={8} onClick={handleNumberClick} />
          <Number value={9} onClick={handleNumberClick} />
          <Number value={4} onClick={handleNumberClick} />
          <Number value={5} onClick={handleNumberClick} />
          <Number value={6} onClick={handleNumberClick} />
          <Number value={1} onClick={handleNumberClick} />
          <Number value={2} onClick={handleNumberClick} />
          <Number value={3} onClick={handleNumberClick} />
          <Number value={0} onClick={handleNumberClick} />
        </div>
        <div className = "OpContain">
          <Operation value="+" onClick={handleOperationClick} />
          <Operation value="-" onClick={handleOperationClick} />
          <Operation value="x" onClick={handleOperationClick} />
          <Operation value="/" onClick={handleOperationClick} />
          <Operation value="=" onClick={handleOperationClick} />
          <Operation value="C" onClick={handleOperationClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
