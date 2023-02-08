import React, { useState } from 'react';
import Header from './Header/Headercost';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const Appcost = () => {
  const [user, setUser] = useState({
    username: '',
    
  });

  const [currentAccount, setCurrentAccount] = useState(user);

  const updateFields = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const changeUser = (e) => {
    setCurrentAccount(user);
    e.preventDefault();
  };

  const resetFields = (e) => {
    setUser({ username: ''});

    setCurrentAccount('');

    e.preventDefault();
  };

  return (
    <div>
      <Header />
      <UserInput
        updateUser={changeUser}
        updateField={updateFields}
        reset={resetFields}
        userName={user.username}
        
      />
      <UserOutput
        username={currentAccount.username}
        
      />
    </div>
  );
};

export default Appcost;
