import React from 'react'
import '../styles/Watching.css'

function Watching() {
    return (
        <div id="watching">
            <a href="/"><img className="navlogo" src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg" alt="" /></a>
            <h1>Who's watching?</h1>
            <div className="users">
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
            </div>
            <button>Manage Profiles</button>
        </div>

    )
}

export default Watching
