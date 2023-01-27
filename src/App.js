import { Container, Content, Row } from "./style";
import Input from "./components/Input";
import Button from "./components/Button";
import React, { useState } from "react";
import * as math from "mathjs"



function App() {
  const [inputNumber, setInputNumber] = useState('0')
  //const [firstNumber, setFirstNumber] = useState('0')
  //const [operation, setOperation] = useState('')

  const insertNumber = (number) => {
    setInputNumber((inputNumber ==='0' ? '' : inputNumber) + number)
  }

  const operationsArray = ['+', '-', '*', '/', '%']
  const insertOperation = (operation) => {
    if(inputNumber === '0' || (operationsArray.includes(inputNumber[inputNumber.length - 1]) /*&& operationsArray.includes(operation)*/)){
      return
    }else{
      insertNumber(operation)
    }
  }

  const clear = () =>{
    setInputNumber('0')
  }

  const erase = () => {
    if(inputNumber !== '0' && inputNumber.length !== 1){
      var newInput = inputNumber.slice(0, -1);
      setInputNumber(newInput)
    }else{
      setInputNumber('0')
    }
  }

  const calculate = () => {
    if (inputNumber === "" || operationsArray.includes(inputNumber[inputNumber.length - 1])) {
      return inputNumber;
    } else {
      setInputNumber(math.evaluate(inputNumber));
    }
  }


  return (
    <Container>
      <Content>
        <Input value={inputNumber}/>
        <Row>
          <Button label='AC' bgColor={'#bdb495'} onClick={()=>clear()}/>
          <Button label='()' bgColor={'#bdb495'} onClick={()=>insertNumber('')}/>
          <Button label='%' bgColor={'#bdb495'} onClick={()=>insertNumber('/100')}/>
          <Button label='÷' bgColor={'#ffb727'} onClick={() => insertOperation('/')}/>
        </Row>
        <Row>
          <Button label='9' onClick={()=>insertNumber('9')}/>
          <Button label='8' onClick={()=>insertNumber('8')}/>
          <Button label='7' onClick={()=>insertNumber('7')}/>
          <Button label='x' bgColor={'#ffb727'} onClick={() => insertOperation('*')}/>
        </Row>
        <Row>
          <Button label='6' onClick={()=>insertNumber('6')}/>
          <Button label='5' onClick={()=>insertNumber('5')}/>
          <Button label='4' onClick={()=>insertNumber('4')}/>
          <Button label='-' bgColor={'#ffb727'} onClick={() => insertOperation('-')}/>
        </Row>
        <Row>
          <Button label='3' onClick={()=>insertNumber('3')}/>
          <Button label='2' onClick={()=>insertNumber('2')}/>
          <Button label='1' onClick={()=>insertNumber('1')}/>
          <Button label='+' bgColor={'#ffb727'} onClick={() =>insertOperation('+')}/>
        </Row>
        <Row>
          <Button label='0' onClick={()=>insertNumber('0')}/>
          <Button label=',' onClick={()=>insertNumber('')}/>
          <Button label='erase' onClick={erase}/>
          <Button label='=' bgColor={'#ffb727'} onClick={calculate}/>
        </Row>
        
      </Content>
    </Container>
  );
}

export default App;
