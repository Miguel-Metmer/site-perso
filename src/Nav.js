import React from "react";
import "./public/css/style.css";

export default class Nav extends React.Component
{
    constructor(props)
    {
        super(props);
    };

    render()
    {
        return(
            <>
                <nav>
                    <h4> <a href="">Miraevallis</a></h4>
                    <ul>
                        <li> <a href="#project-anchor">Projets</a> </li>
                        {/* <li> <a href="#">Technologies</a> </li>
                        <li> <a href="#">Contact</a> </li> */}
                    </ul>
                </nav>
            </>
        );
    };
};