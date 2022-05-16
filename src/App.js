import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

import { styled } from '@stitches/react';

import "./App.css";
import { blackA } from '@radix-ui/colors';
import * as LabelPrimitive from '@radix-ui/react-label';

function App({db}) {
  const [inputValue, setInputValue] = useState('');
  const todos = ["aaa", "bbb", "ccc"];

  const todoStrip = (text, index) => {
    return <li className='list-content' key={index}>{text}</li>;
  };
  
  const onKeyDown = async (e) => {
    if(e.code === 'Enter'){
      await setDoc(doc(db, "ToDos", "test"), {
        description: {inputValue}, 
        done: false,
      });
    }
  };

  return (
    <>
      <div className="list-title">Shopping List</div>
      {todos.map((todo, index) => todoStrip(todo, index))}
      <input
        onChange={setInputValue}
        className="input-field"
        type="text"
        id="firstName"
        defaultValue="Pedro Duarte"
        onKeyDown={onKeyDown}
      />
    </>
  );
}

export default App;
