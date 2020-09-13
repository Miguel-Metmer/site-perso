import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Diaporama from "./Diaporama";
import Projects from "./Projects";
import Footer from "./Footer";

export default class App extends React.Component
{
    constructor(props)
    {
        super(props);
    };

    render()
    {
        return(
            <>
                <Header/>
                <Nav/>
                <Diaporama/>
                <Projects/>
                <Footer/>
            </>
        );
    };
};