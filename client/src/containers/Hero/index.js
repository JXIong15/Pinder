import React from 'react';
import { useState } from 'react';
import "./style.css";
import SignUpForm from '../SignUpForm';


function Hero() {


  const [buttonPopUp, setButtonPopUp] = useState(false);



  return (
    <div className="hero-container">
      <button
        className="button btn-icon btn-outline"
        type="submit"
        onClick={() => setButtonPopUp(true)}>
        CREATE ACCOUNT
      </button>
        <SignUpForm trigger={buttonPopUp} setTrigger={setButtonPopUp}>
          <h3>My popup</h3>
          <p>This is my button triggered popup</p>
        </SignUpForm>
    </div>

  );
}

export default Hero;