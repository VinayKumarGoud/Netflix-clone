import React from 'react'
import { useState } from 'react/cjs/react.development'
import '../styles/Main.css'
function Main() {
    const [showcard1, setShowCard1] = useState(false);
    const [showcard2, setShowCard2] = useState(false);
    return (
        <div>
            <div className="main_nav">
                <a href="/main">
                    <img src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg" alt="" />
                </a>
                <div className="nav_links">
                    <div className="left_nav_links">
                        <a href="#/">Home</a>
                        <a href="#/">TV Shows</a>
                        <a href="#/">Movies</a>
                        <a href="#/">New& Popular</a>
                        <a href="#/">My List</a>
                    </div>
                    <div className="toggle_items">
                        <h3
                            onClick={() => {
                                setShowCard1(!showcard1)
                            }
                            }
                        >Browse</h3>
                        <img
                            src="../Images/triangle.png"
                            onClick={() => {
                                setShowCard1(!showcard1)
                            }

                            }
                            alt="" className="triangle" />
                    </div>
                    <div className="right_nav_links">
                        <img src="../Images/search.png" alt="" className="search" />
                        <a href="#/">DVD</a>
                        <img src="../Images/bell.png" alt="" className="bell" />
                        <img 
                        src="../Images/user1.png" 
                        onClick={()=>{
                            setShowCard2(!showcard2)
                        }
                        }
                        alt="" className="profile" />
                        <img src="../Images/triangle.png" 
                        onClick={()=>{
                            setShowCard2(!showcard2)
                        }
                        }
                        alt="" className="triangle" />
                    </div>
                </div>

            </div>
            {
                showcard1 ?
                    <div className="toggle_nav_links">
                        <a href="#/">Home</a>
                        <a href="#/">TV Shows</a>
                        <a href="#/">Movies</a>
                        <a href="#/">New& Popular</a>
                        <a href="#/">My List</a>
                    </div>
                    : null
            }
            {
                showcard2 ?
            <div className="nav_toggle_div">
                <div>
                    <a href="/main">
                        <img src="../Images/user1.png" alt="" />
                    </a>
                    <h3>Vinay</h3>
                </div>
                <div>
                    <a href="/main">
                        <img src="../Images/user2.jpg" alt="" />
                    </a>
                    <h3>Chanduu</h3>
                </div>
                <div>
                    <a href="/main">
                        <img src="../Images/user3.jpg" alt="" />
                    </a>
                    <h3>Vishal</h3>
                </div>
                <div>
                    <a href="/main">
                        <img src="../Images/user4.jfif" alt="" />
                    </a>
                    <h3>Sony</h3>
                </div>
                <div>
                    <a href="/main">
                        <img src="../Images/user5.png" alt="" />
                    </a>
                    <h3>Indu</h3>
                </div>
                <h4>Manage Profiles</h4>
                <div className="toggle_line"></div>
                <h4>Account</h4>
                <h4>Help Center</h4>
                <h4>Sign Out of Netflix</h4>
            </div>
            : null
            }
        </div>
    )
}

export default Main
