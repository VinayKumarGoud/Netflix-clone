import React from 'react'
import '../styles/Plan1.css'
function Plan1() {
    return (
        <div>
           <div className="plan1_nav">
                <a href="/">
                    <img src="../Images/Netflix-Logo.png" alt="" />
                </a>
                <a href="#/">Sign In</a>
           </div>
           <div className="line"></div>

           <div className="plan1_body">
               <h5>STEP 1 OF 3</h5>
               <h1>Welcome back! <br />Joining Netflix is easy.</h1>
               <h3>Enter your password and you'll be watching in no time. </h3>
               <h4>Email</h4>
               <h2>vk160006@gmail.com</h2>
               <input type="text" value="Enter your Password"/>
               <a href="#/">Forgot your password?</a>
               <a href="#/"><button>Next</button></a>

           </div>


        </div>
    )
}

export default Plan1
