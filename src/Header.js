import React from 'react';
import './Header.css';
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";





function Header() {
    return (

        /*BEM naming convention - "Block, Element, Modifier". Gives developer an
        an understanding of how an HTML tag relates to another*/
        <div className="header">

            {/*Create two containers for the header (left side with nav btns and
            right side with the hulu icon*/}

            <div className="header__icons">

                {/*creates small container for each icon along with the text, to make it easier to manipulate as a unit later on*/}

                {/*Second item is a modifier (header__icon--active)*/}
                <div className="header__icon header__icon--active"> 
                    <HomeIcon />
                    <p>Home</p>
                </div>

                <div className="header__icon">
                    <FlashOnIcon />
                    <p>Trending</p>
                </div>

                <div className="header__icon">
                    <LiveTvIcon />
                    <p>Verified</p>
                </div>

                <div className="header__icon">
                    <VideoLibraryIcon />
                    <p>Collections</p>
                </div>

                <div className="header__icon">
                    <SearchIcon />
                    <p>Search</p>
                </div>

                <div className="header__icon">
                    <PersonOutlineIcon />
                    <p>Account</p>
                </div>






            </div>

            <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt="" />
        </div>
    )
}

export default Header;
