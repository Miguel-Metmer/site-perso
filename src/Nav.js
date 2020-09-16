import React from "react";
import MobileNav from "./MobileNav";
import "./public/css/style.css";

export default class Nav extends React.Component
{
    constructor(props)
    {
        super(props);
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
                    <h4> <a href="#">Miraevallis</a></h4>
                    <ul className="desktop-menu">
                        <li> <a href="#project-anchor">Projets</a> </li>
                        {/* <li> <a href="#">Technologies</a> </li>
                        <li> <a href="#">Contact</a> </li> */}
                    </ul>

                    <h5 onClick={this.handleMenuClick} className="mobile-burger"> <a href=""><i className="fas fa-bars"></i></a></h5>
                    {mobile}
                </nav>
            </>
        );
    };
};