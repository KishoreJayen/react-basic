
import React, { useState } from 'react';

function MiniCalc() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');


 const calculate =(expression) =>{
 const num1 = parseInt(input1)
 const num2 = parseInt(input2)

    switch (expression) {
      case 'add':
        setResult(num1 + num2);
        break;
      case 'sub':
        setResult(num1 - num2);
        break;
      case 'mul':
        setResult(num1 * num2);
        break;
      case 'div':
        setResult(num1 / num2);
        break;
    }
  };

  return (
    <>
      <h1><i style={{color:'orangered', backgroundColor:'yellow'}}>MINI CALCULATOR</i></h1>
      <input type='text' value={input1} onChange={(e) => setInput1(e.target.value)} />
      <input type='text' value={input2} onChange={(e) => setInput2(e.target.value)} />
      <button onClick={() => calculate('add')}>Add</button>
      <button onClick={() => calculate('sub')}>Subtract</button>
      <button onClick={() => calculate('mul')}>Multiply</button>
      <button onClick={() => calculate('div')}>Divide</button>
      <p>Result: {result}</p>
      <hr></hr>
    </>
  );
}

export default MiniCalc;
