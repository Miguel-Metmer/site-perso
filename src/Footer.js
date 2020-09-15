import React from "react";
import "./public/css/style.css";

export default class Footer extends React.Component
{
    constructor(props)
    {
        super(props);
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
                    <h6> <a href="mailto:Miguel.Metmer@miraevallis.com">Miguel.Metmer@miraevallis.com </a> | 03.22.93.09.44</h6>
                    <h6> Copyright © {this.state.date.getFullYear()} Miguel Metmer tous droits réservés - Création Miguel Metmer </h6>
                </footer>
            </>
        );
    };
};