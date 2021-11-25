import React from 'react'
import '../styles/Footer.css'
function Footer() {
    return (
        <div id="footer">
            <h4>Questions? Call 000-800-040-1843</h4>
            <div className="footer_links">
                <div>
                    <a href="#/">FAQ</a>
                    <a href="#/">Help Centre</a>
                    <a href="#/">Account</a>
                    <a href="#/">Media Centre</a>
                </div>

                <div>
                    <a href="#/">Investor Relations</a>
                    <a href="#/">Jobs</a>
                    <a href="#/">Ways to Watch</a>
                    <a href="#/">Terms of Use</a>
                </div>

                <div>
                    <a href="#/">Privacy</a>
                    <a href="#/">Cookie Preferences</a>
                    <a href="#/">Corporate Information</a>
                    <a href="#/">Contact Us</a>
                </div>
                <div>
                <a href="#/">Speed Test</a>
                <a href="#/">Legal Notices</a>
                <a href="#/">Only on Netflix</a>
                </div>
            </div>
            <select>

                <option className="option" value="" >English</option>
                <option className="option" value="" >हिंदी</option>

            </select>
            <h5>Netflix India</h5>
        </div>
    )
}

export default Footer
