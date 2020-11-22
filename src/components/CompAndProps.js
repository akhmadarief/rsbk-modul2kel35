import React, { Component } from 'react';
import '../App.css';

// function components
function Square(props) {
    return (
        <div>
            <h2>Hallo</h2>
            <p>Saya Components {props.komponen}</p>
            <a href={props.link}>Click me!</a>
        </div>
    );
}

// class components
export default class CompAndProps extends Component {
    render() {
        const background = {
            backgroundColor: this.props.bgcolor
        }
        return (
            <div className="wrapper">
                <div className="User-info" style={background}>
                    <Square komponen="kiri" link="/kiri" />
                </div>
                <div className="User-info" style={background}>
                    <Square komponen="kanan" link="/kanan" />
                </div>
            </div>
        )
    }
}