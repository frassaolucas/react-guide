import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Username: {props.userName}</p>
      <p>Lorem ipsum dolor sit.</p>
    </div>
  );
};

export default userOutput;