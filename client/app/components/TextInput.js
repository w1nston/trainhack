import React from 'react';

export default function TextInput(props) {
  return (
    <div className="text-input-container">
      <input
        name={props.name}
        placeholder={props.placeholder}
        value={props.text}
        onChange={props.onChange}
        type={props.type}
      />
    </div>
  );
}
