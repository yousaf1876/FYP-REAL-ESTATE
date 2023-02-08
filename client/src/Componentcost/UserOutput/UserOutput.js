import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  
  return (
    <div className="output">
      <h1>Cost</h1> 
      <p>
        Expected labour cost: <span>{(props.username)*55000} with 220/Sft</span>
      </p>
      <p>
       Expected bricks: <span>{(props.username)*10000} bricks</span>
      </p>
      <p>
       Expected cement bags : <span>{(props.username)*86} bags</span>
      </p>
      <p>
        Expected rebar in tons: <span>{(props.username)*0.35} tons</span>
      </p>
      <p>
        Expected crush(lenter): <span>{(props.username)*170} c.ft</span>
      </p>
      <p>
        Expected sand: <span>{(props.username)*700} c.ft</span>
      </p>
      
      
      
    </div>
  );
};

export default UserOutput;
