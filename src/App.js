import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Diaporama from "./Diaporama";
import Projects from "./Projects";
import Footer from "./Footer";
import Technologies from "./Technologies";

export default class App extends React.Component
{
    render()
    {
        return(
            <>
                <Header/>
                <Nav/>
                <Diaporama/>
                <Projects/>
                <Technologies/>
                <Footer/>
            </>
        );
    };
};