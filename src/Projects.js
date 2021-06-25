import React from "react";
import "./public/css/style.css";
import SiteA from "./public/images/Site1.png";
import SiteB from "./public/images/Site2.png";
import SiteC from "./public/images/Site3.png";
import SiteD from "./public/images/Site4.png";
import SiteE from "./public/images/Site5.png";
import SiteF from "./public/images/Site6.png";

export default class Projects extends React.Component
{
    render()
    {
        return(
            <>
                <section className="project" id="project-anchor">
                    <h3>Projets</h3>

                    <div className="projects">
                        <figure>
                            <img src={SiteA} alt="SiteA"/>
                            <figcaption>
                                <i className="fab fa-html5"></i>
                                <h5>Agence de création de média - Html/Css</h5>
                                <a href="http://www.agency.miraevallis.com/"> Aller sur le site </a>
                            </figcaption>
                        </figure>

                        <figure>
                            <img src={SiteF} alt="SiteA"/>
                            <figcaption>
                                <i className="fab fa-desktop"></i>
                                <h5>Les Jardins de Manthes - Wordpress</h5>
                                <a href="https://www.jardins-manthes.fr/"> Aller sur le site </a>
                            </figcaption>
                        </figure>

                        <figure>
                            <img src={SiteB} alt="SiteA"/>
                            <figcaption>
                                <i className="fab fa-wordpress"></i>
                                <h5>Office de tourisme - Wordpress</h5>
                                <a href="http://www.ireki.web-aso.com"> Aller sur le site </a>
                            </figcaption>
                        </figure>

                        <figure>
                            <img src={SiteC} alt="SiteA"/>
                            <figcaption>
                                <i className="fab fa-js-square"></i>
                                <h5> Réservation de vélos - Javascript </h5>
                                <a href="http://vimap.miraevallis.com"> Aller sur le site </a>
                            </figcaption>
                        </figure>

                        <figure>
                            <img src={SiteD} alt="SiteA"/>
                            <figcaption>
                                <i className="fab fa-php"></i>
                                <h5> Blog écrivain - Php</h5>
                                <a href="http://blog.miraevallis.com"> Aller sur le site </a>
                            </figcaption>
                        </figure>
                        
                        <figure>
                            <img src={SiteE} alt="SiteA"/>
                            <figcaption>
                                <i className="fab fa-symfony"></i>
                                <h5> Blog/forum d'actualité - Symfony</h5>
                                <a href="http://news.miraevallis.com"> Aller sur le site </a>
                            </figcaption>
                        </figure>
                    </div>
                </section>
            </>
        );
    };
};