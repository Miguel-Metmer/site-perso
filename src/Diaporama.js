import React from "react";
import "./public/css/style.css";
import image from "./public/images/image.jpg";

export default class Diaporama extends React.Component
{
    constructor(props)
    {
        super(props);
    };

    render()
    {
        return(
            <>
                <figure className="diaporama">
                    <img src={image} alt="vue"/>
                    <figcaption> 
                        <h3>Conception Web</h3>
                    </figcaption>
                </figure>
            </>
        );
    };
};