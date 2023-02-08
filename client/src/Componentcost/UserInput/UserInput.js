import React from 'react';
import './UserInput.css';   

const UserInput = (props) => {
  
  return (
    <div>
      <form className="UserInput">
        <spam><h1>input area size in marla</h1></spam>
        <input onChange={props.updateField}  className="input-username" name="username"
          type="number" value={props.userName} placeholder="area size"/>
        <div>
          <button onClick={props.updateUser} type="submit">
            Submit
          </button>
          <button onClick={props.reset}>RESET</button>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
