import React, { useState } from 'react';

const Input = ({ onSubmit, rock }) => {
  const [value, setValue] = useState('');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        setValue('');
        onSubmit(value);
      }}
    >
      <textarea
        className="input-area"
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
        disabled={rock}
      >
      </textarea>
      <button
        type="submit"
        className="btn"
        disabled={rock || !value}
      >
        Start
      </button>
    </form>
  );
};

export default Input;