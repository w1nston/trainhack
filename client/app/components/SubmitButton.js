import React from 'react';

export default function SubmitButton(props) {
  return (
    <div className="submit-button-container">
      <button onClick={props.onSubmit}>
        {props.label}
      </button>
    </div>
  );
}
