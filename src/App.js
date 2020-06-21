import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App({name, age, roll_num}) {
  return (
    <div>
      Hello World from {name}
      <br/>
      Age: {age}
      <br/>
      Roll Number: {roll_num + 12}
    </div>
  );
}

export default App;

//Newer Method of De-sturcturing
  /*
  let user = {Name:"Muhammmad Suffyan", Age:18, Field:"BDS"}
  let {Name, Age, Field} = user
  console.log(Name,Age,Field)
  */
  //Older Method of De-sturcturing
  /*
  let user = {Name:"Muhammmad Suffyan", Age:18, Field:"BDS"}
  let student_name = user.Name
  let student_age = user.Age
  console.log(student_name,student_age)
  */