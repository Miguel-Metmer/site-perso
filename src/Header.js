import React from "react";
import "./public/css/style.css";

export default class Header extends React.Component
{
    render()
    {
        return(
            <>
                <header>
                    <h6> 
                        <a href="https://www.facebook.com/miguel.metmer"> <i className="fab fa-facebook-f"></i> </a> 
                        <a href="https://www.linkedin.com/in/miguel-metmer-88581a19b/"> <i className="fab fa-linkedin"></i> </a>
                    </h6>
                </header>
            </>
        );
    };
};