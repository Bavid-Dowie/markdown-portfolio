import React, { Component } from 'react';

class Book extends Component{
    render() {
        return (
            <div>
               <h1>{this.props.title}</h1>
               <h6>{this.props.author}</h6>
               <img src={this.props.authorImg} alt="Some guy"/>
               <p>{this.props.description}</p>
            </div>
        )
    }
}
export default Book