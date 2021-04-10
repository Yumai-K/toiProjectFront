import React, {useState, useEffect } from 'react';
import './App.css';
import customAxios from './customAxios';


function App() {

  // init Data 선언
  const [result, setResult] = useState([]);

  // Data 넣기
  function callback(data){
    console.log(data)
    setResult(data);
  }

  // Backend 연동시 수행
  useEffect(
    ()=>{
      customAxios('users', 'get', callback)
    }, []
  );

  const userList = result.map( user => <tr>
    <td>{user.usrId}</td>
    <td>{user.usrEml}</td>
    <td>{user.usrNm}</td>
    <td>{user.usrTel}</td>
    <td>{user.usrPwd}</td>
  </tr>
  )

  //const nameList = names.map(name => <li key={name.id}>{name.text}</li>)

  return (
    <div className="App">
      <header className="App-header">
        <table className="user_table">
          <thead>
            <tr>
              <th scope="cols">USER_ID</th>
              <th scope="cols">NAME</th>
              <th scope="cols">EMAIL</th>
              <th scope="cols">TEL</th>
              <th scope="cols">BRT</th>
            </tr>
          </thead>
          <tbody>
            {userList}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
