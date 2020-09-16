import React from "react";
import "./public/css/style.css";
import SiteA from "./public/images/Site1.png";
import SiteB from "./public/images/Site2.png";
import SiteC from "./public/images/Site3.png";
import SiteD from "./public/images/Site4.png";
import SiteE from "./public/images/Site5.png";

export default class Projects extends React.Component
{
    constructor(props)
    {
        super(props);
    };

    render()
    {
        return(
            <>
                <section className="project" id="project-anchor">
                    <h3>Projets</h3>

                    <div className="projects">
                        <figure>
                            <i className="fab fa-html5"></i>
                            <img src={SiteA} alt="SiteA"/>
                            <figcaption>
                                <h5>Agence de création de média - Html/Css</h5>
                                <a href="http://www.agency.web-aso.com/"> Aller sur le site </a>
                            </figcaption>
                        </figure>

                        <figure>
                            <i className="fab fa-wordpress"></i>
                            <img src={SiteB} alt="SiteA"/>
                            <figcaption>
                                <h5>Site pour office de tourisme - Wordpress</h5>
                                <a href="http://www.ireki.web-aso.com"> Aller sur le site </a>
                            </figcaption>
                        </figure>

                        <figure>
                            <i className="fab fa-js-square"></i>
                            <img src={SiteC} alt="SiteA"/>
                            <figcaption>
                                <h5> Réservation de vélos libre service - Javascript </h5>
                                <a href="http://vimap.web-aso.com"> Aller sur le site </a>
                            </figcaption>
                        </figure>

                        <figure>
                            <i className="fab fa-php"></i>
                            <img src={SiteD} alt="SiteA"/>
                            <figcaption>
                                <h5> Site pour écrivain - Php</h5>
                                <a href="http://blog.web-aso.com"> Aller sur le site </a>
                            </figcaption>
                        </figure>
                        
                        <figure>
                            <i className="fab fa-symfony"></i>
                            <img src={SiteE} alt="SiteA"/>
                            <figcaption>
                                <h5> Blog/forum d'actualité - Symfony</h5>
                                <a href="http://news.web-aso.com"> Aller sur le site </a>
                            </figcaption>
                        </figure>
                    </div>
                </section>
            </>
        );
    };
};