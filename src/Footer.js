import React from "react";
import "./public/css/style.css";

export default class Footer extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            date : new Date(),
        }
        this.id = null;
    };


    componentDidMount = () => {
        this.id = setInterval(() => {
            this.setState({
                date : new Date()
            })
        }, 1000)
    };

    componentWillUnmount = () => {
        clearInterval(this.id);
    }

    render()
    {
        return(
            <>
                <footer>
                    <h6>{this.state.date.toLocaleString()}</h6>
                    <h6> <a href="mailto:Miguel.Metmer@outlook.com">Miguel.Metmer@outlook.com </a> | 06.68.38.78.31</h6>
                    <h6> Copyright © {this.state.date.getFullYear()} Miguel Metmer tous droits réservés - Création Miguel Metmer </h6>
                </footer>
            </>
        );
    };
};