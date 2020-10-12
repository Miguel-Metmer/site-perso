import React from "react";
import "./public/css/style.css";

export default class Technologies extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            icons : ['css3','html5','wordpress','php','symfony','react','git']
        }
    }

    render()
    {
        return(
            <>
                <section className="technology" id="technology-anchor">
                    <h3>Technologies</h3>
                    <ul>
                        <li>
                            <figure>
                                <i class="fab fa-html5 color-blue-dark"></i> 
                                <figcaption>Html</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <i class="fab fa-css3-alt color-orange"></i> 
                                <figcaption>Css</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <i class="fab fa-php color-blue"></i> 
                                <figcaption>Php</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <i class="fab fa-symfony"></i> 
                                <figcaption>Symfony</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <i class="fas fa-database color-blue"></i>
                                <figcaption>Sql</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <i class="fab fa-js color-yellow"></i> 
                                <figcaption>Javascript</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <i class="fab fa-node color-green"></i> 
                                <figcaption>NodeJs</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <i class="fab fa-react color-blue-light"></i> 
                                <figcaption>ReactJs</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <i class="fab fa-git color-red"></i> 
                                <figcaption>Git</figcaption>
                            </figure>
                        </li>
                    </ul>
                </section>
            </>
        )
    }
}