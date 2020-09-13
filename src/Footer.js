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
                    <h6> {this.state.date.toLocaleString()} </h6>
                </footer>
            </>
        );
    };
};