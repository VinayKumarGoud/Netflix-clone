import React, { useState } from 'react'
import '../styles/Signin.css'


function Signin() {
    const [showtermsbutton, setShowTermsButton] = useState(true);
    return (
        <div id="signin">
            <div className="signin_table1">
                <div>
                    <img className="signin_img" src="../Images/signin_img.jpg" alt="" />
                    <img id="hover" className="overlay" src="../Images/Overlay.png" alt="" />


                </div>

                <div className="navlogo">
                    <a href="/"><img src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg" alt="" /></a>

                </div>
                <div className="signin_box">
                    <h1>Sign In</h1>
                    <input type="email" value="Email or phone number" />
                    <input type="text" value="Password" />

                    <a href="/watching"> <button>Sign In</button></a>
                    <div className="verify">
                        <div>
                            <img
                                src={showtermsbutton ? "../Images/terms_unverify.svg" : "../Images/terms_verify.png"}

                                onClick={() => {
                                    setShowTermsButton(prevMode => !prevMode)

                                }}
                                alt="" />
                            <h4>Remember me</h4>
                        </div>
                        <h5>Need help?</h5>
                    </div>

                    <div className="facebook">
                        <img src="../Images/FB_logo.png" alt="" />
                        <h3>Login with Facebook</h3>
                    </div>
                    <div className="netflix">
                        <h2>New to Netflix?</h2>
                        <a href="#/">Sign up now.</a>
                    </div>
                    <div className="capcha">
                        <h4>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#/">Learn more</a></h4>
                    </div>


                </div>
            </div>
            <div className="signin_footer">
                <h3>Questions? Call 000-800-040-1843</h3>
                <div className="links">
                    <a href="#/">FAQ</a>
                    <a href="#/">Help Centre</a>
                    <a href="#/">Terms of Use</a>
                    <a href="#/">Privacy</a>
                    <a href="#/">Cookie Preferences</a>
                    <a href="#/">Corporate Information</a>
                </div>
                <select>

                    <option className="option" value="" >English</option>
                    <option className="option" value="" >हिंदी</option>

                </select>
            </div>

        </div>
    )
}

export default Signin
