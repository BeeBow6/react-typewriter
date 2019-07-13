import React from 'react';
import Input from './input';
import {
  Typing,
  useTyping
} from './typing';


const App = () => {
  const {
    typeStart,
    inputRock,
    typeEnd,
    ...params
  } = useTyping();

  const doSomething = () => {
    if (params.message) {
      console.log('Type End!');
    }
    typeEnd();
  };

  return (
    <div className="wrp">
      <Input
        onSubmit={typeStart}
        rock={inputRock}
      />
      <Typing
        className="msg-box"
        speed={80}
        typeEnd={doSomething}
        {...params}
      />
      <button
        type="button"
        className="btn"
        disabled={inputRock || !params.message}
        onClick={() => typeStart('')}
      >
        Reset
        </button>
    </div>
  );
};

export default App;