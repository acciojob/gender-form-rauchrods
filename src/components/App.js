
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  let [gender, setGender] = useState("shirt");

  function updatefunc(e) {
    let gender = e.target.getAttribute("id");

    if (gender === "male") {
      setGender("shirt");
    }
    else {
      setGender("dress");
    }
  }


  return (
    <div>
      <h2>Select your gender:</h2>
      <label htmlFor="male">Male</label>
      <input type="radio" name="gender" id="male" onChange={updatefunc} />
      <label htmlFor="female">Female</label>
      <input type="radio" name="gender" id="female" onChange={updatefunc} />

      <h2>Select your {gender} size</h2>
      <select name="size">
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="6">6</option>
      </select>

    </div>
  )
}

export default App
