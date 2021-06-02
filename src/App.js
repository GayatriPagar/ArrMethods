import React from 'react';
import './App.css';

function App() {
  console.log(4+34);
  

  const student =[{name:'Gayatri',email:'gayatri@gmail.com',Contact:1234567890},
  {name:'Sweety',email:'Sweety@gmail.com',Contact:8876453210},
  {name:'John',email:'John@gmail.com',Contact:8321065432},
  {name:'Peter',email:'peter@gmail.com',Contact:5678349023}
  ]
  return (
    
  
    <div className="App">
      <h1>Handle Array with List</h1>
      <h2 >Gender:
      <label><input type="radio" name="female-male"/> female</label>
    <label><input type="radio" name="female-male"/> male</label>
     </h2>
      
      <table border="3">
      <tr>
            <td>Sr.No</td>
            <td>Name</td>
            <td>Email_Id</td>
            <td>Contact_No</td>
        </tr>
        {
        student.map((data,i) =>
          <tr key={i}>
            <td>{i+1}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.Contact}</td>
        </tr>
        )
      }</table>
     <input type="text" placeholder="Name" required/>
    <button type="submit">Submit</button> 
    
    </div>
  );
}

export default App;