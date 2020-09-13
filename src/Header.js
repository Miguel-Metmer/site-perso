import React from "react";
import "./public/css/style.css";

export default class Header extends React.Component
{
    constructor(props)
    {
        super(props);
 
    };


    render()
    {
        return(
            <>
                <header>
                    <h6> 03.22.93.09.44</h6>
                    <h6> <a href="mailto:Miguel.Metmer@miraevallis.com">Miguel.Metmer@miraevallis.com</a> </h6>
                    <h6>8 rue d'Hérissart 80260</h6>
                </header>
            </>
        );
    };
};