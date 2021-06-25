import React from "react";
import MobileNav from "./MobileNav";
import "./public/css/style.css";
import icon from "./public/images/icon.png";

export default class Nav extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            isMobile : false
        };
    }

    handleMenuClick = (e) => {
        e.preventDefault();
        this.setState({
            isMobile : !this.state.isMobile
        })
        console.log(this.state.isMobile);
    }

    render()
    {
        let mobile;
        if(this.state.isMobile)
        {
            mobile = <MobileNav/>
        }

        return(
            <>
                <nav>
                    <h4>  <a href="https://www.presstech.fr"> <img src={icon} alt="icon"/> </a> </h4>
                    <ul className="desktop-menu">
                        <li> <a href="#project-anchor">Projets</a> </li>
                        <li> <a href="#technology-anchor">Technologies</a> </li>
                        {/*<li> <a href="#">Contact</a> </li> */}
                    </ul>

                    <h5 onClick={this.handleMenuClick} className="mobile-burger"> <a href=""><i className="fas fa-bars"></i></a></h5>
                    {mobile}
                </nav>
            </>
        );
    };
};