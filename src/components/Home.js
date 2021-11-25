import React, { useState } from 'react'
import '../styles/Home.css'
function Home() {
    const [showcard1, setShowCard1] = useState(false);
    const [showcard2, setShowCard2] = useState(false);
    const [showcard3, setShowCard3] = useState(false);
    const [showcard4, setShowCard4] = useState(false);
    const [showcard5, setShowCard5] = useState(false);
    const [showcard6, setShowCard6] = useState(false);



    const [showimage1, setShowImage1] = useState(true);
    const [showimage2, setShowImage2] = useState(true);
    const [showimage3, setShowImage3] = useState(true);
    const [showimage4, setShowImage4] = useState(true);
    const [showimage5, setShowImage5] = useState(true);
    const [showimage6, setShowImage6] = useState(true);


    return (
        <div id="home">
            {/* //////////////////////***************************** This is Table 1 ********************  */}
            <div className="table1">
                <div>
                    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5dd45df7-33f1-4274-97ea-e9c6aca69dad/ed1cb962-411d-4e43-bad2-33f07ae8e341/IN-en-20211108-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
                    <img className="overlay" src="../Images/Overlay.png" alt="" />
                </div>

                <h1>Unlimited movies,TV <br /> shows and more.</h1>
                <h3>Watch anywhere.Cancel anytime.</h3>
                <h5>Ready to watch? Enter your email to create or restart your Membership.</h5>
                <input type="text" value="Email Address" required="required" />
                <a href="/plan1"><button>Get Started</button></a>
            </div>
            <div className="home_navbar">
                <a href="/">
                    <img src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg" alt="" />
                </a>

                <div className="navbutton">
                    <select>

                        <option className="option" value="" >English</option>
                        <option className="option" value="" >हिंदी</option>

                    </select>
                    <a href="/signin">Sign In</a>
                </div>

            </div>


            <div className="line"></div>


            {/* //////////////////////***************************** This is Table 1 ********************  */}


            <div className="table2">
                <div className="table2_info">
                    <h1>Enjoy on your TV.</h1>
                    <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
                </div>
                <div className="table2_image">
                    <img src="../Images/tv.png" alt="" />


                </div>
            </div>

            <div className="line"></div>

            <div className="table3">
                <div className="table2_image">
                    <img src="../Images/mobile.jpg" alt="" />
                </div>
                <div className="table2_info">
                    <h1>Download your shows to watch offline.</h1>
                    <h3>Save your favourites easily and always have something to watch.</h3>
                </div>

            </div>

            <div className="line"></div>

            <div className="table2">
                <div className="table2_info">
                    <h1>Watch everywhere.</h1>
                    <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
                </div>
                <div className="table2_image">
                    <img src="../Images/device.png" alt="" />


                </div>
            </div>

            <div className="line"></div>

            <div className="table3">
                <div className="table2_image">
                    <img src="../Images/table5.png" alt="" />
                </div>
                <div className="table2_info">
                    <h1>Create profiles for children.</h1>
                    <h3>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
                </div>

            </div>
            <div className="line"></div>

            {/* //////////////////////***************************** This is Table 4 ********************  */}

            <div className="table4">
                <h1>Frequently Asked Questions</h1>

                {/* ***************************** this is box 1 ********************  */}
                <div className="table4_box1">
                    <div className="table4_box1_info">
                        <h3>What is Netflix?</h3>
                        <img
                            src={showimage1 ? "../Images/coolicon.svg" : "../Images/close.svg"}
                            onClick={() => {
                                setShowImage1(prevMode => !prevMode)
                                setShowCard1(!showcard1)
                            }}
                            alt="" />
                    </div>
                    {
                        showcard1 ?
                            <div>
                                <h4>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</h4>
                                <h4>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</h4>
                            </div>
                            : null
                    }
                </div>


                {/* ***************************** this is box 2 ********************  */}
                <div className="table4_box1">
                    <div className="table4_box1_info">
                        <h3>How much does Netflix cost?</h3>
                        <img
                            src={showimage2 ? "../Images/coolicon.svg" : "../Images/close.svg"}
                            onClick={() => {
                                setShowImage2(prevMode => !prevMode)
                                setShowCard2(!showcard2)
                            }}
                            alt="" />
                    </div>
                    {
                        showcard2 ?
                            <div>
                                <h4>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.</h4>

                            </div>
                            : null
                    }
                </div>

                {/* ***************************** this is box 3 ********************  */}
                <div className="table4_box1">
                    <div className="table4_box1_info">
                        <h3>Where can I watch?</h3>
                        <img
                            src={showimage3 ? "../Images/coolicon.svg" : "../Images/close.svg"}
                            onClick={() => {
                                setShowImage3(prevMode => !prevMode)

                                setShowCard3(!showcard3)

                            }}
                            alt="" />
                    </div>
                    {
                        showcard3 ?
                            <div>
                                <h4>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</h4>
                                <h4>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</h4>
                            </div>
                            : null
                    }
                </div>

                {/* ***************************** this is box 4 ********************  */}
                <div className="table4_box1">
                    <div className="table4_box1_info">
                        <h3>How do I cancel?</h3>
                        <img
                            src={showimage4 ? "../Images/coolicon.svg" : "../Images/close.svg"}
                            onClick={() => {
                                setShowImage4(prevMode => !prevMode)

                                setShowCard4(!showcard4)

                            }}
                            alt="" />
                    </div>
                    {
                        showcard4 ?
                            <div>
                                <h4>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</h4>
                            </div>
                            : null
                    }
                </div>

                {/* ***************************** this is box 5 ********************  */}
                <div className="table4_box1">
                    <div className="table4_box1_info">
                        <h3>What can I watch on Netflix?</h3>
                        <img
                            src={showimage5 ? "../Images/coolicon.svg" : "../Images/close.svg"}
                            onClick={() => {
                                setShowImage5(prevMode => !prevMode)

                                setShowCard5(!showcard5)

                            }}
                            alt="" />
                    </div>
                    {
                        showcard5 ?
                            <div>
                                <h4>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</h4>
                            </div>
                            : null
                    }
                </div>

                {/* ***************************** this is box 6 ********************  */}
                <div className="table4_box1">
                    <div className="table4_box1_info">
                        <h3>Is Netflix good for kids?</h3>
                        <img
                            src={showimage6 ? "../Images/coolicon.svg" : "../Images/close.svg"}
                            onClick={() => {
                                setShowImage6(prevMode => !prevMode)

                                setShowCard6(!showcard6)

                            }}
                            alt="" />
                    </div>
                    {
                        showcard6 ?
                            <div>
                                <h4>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</h4>
                                <h4>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</h4>
                            </div>
                            : null
                    }
                </div>
                <h5>Ready to watch? Enter your email to create or restart your Membership.</h5>
                <div className="table4_btn">
                    <input type="text" value="Email Address" required="required" />
                    <button>Get Started</button>
                </div>


            </div>

            <div className="line"></div>


        </div>
    )
}

export default Home
