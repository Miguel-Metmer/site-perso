import React from "react";
import "./public/css/style.css";
import image from "./public/images/image.jpg";

export default class Diaporama extends React.Component
{
    render()
    {
        return(
            <>
                <figure className="diaporama">
                    <img src={image} alt="vue"/>
                    <figcaption> 
                        <h3> <span className="diaporama-color">Miraevallis :</span> Conception Web</h3>
                        <h4>Réalisation Multimédias</h4>
                    </figcaption>
                </figure>
            </>
        );
    };
};