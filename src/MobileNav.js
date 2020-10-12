import React from "react";
import "./public/css/style.css";

export default class MobileNav extends React.Component
{
    constructor()
    {
        super();
    }
    
    render()
    {
        return(
            <>
                <nav>
                    <ul className="mobile-menu">
                        <li> <a href="#project-anchor">Projets</a> </li>
                        <li> <a href="#technology-anchor">Technologies</a> </li>
                        {/* <li> <a href="#">Contact</a> </li>  */}
                    </ul>
                </nav>
            </>
        );
    };
};