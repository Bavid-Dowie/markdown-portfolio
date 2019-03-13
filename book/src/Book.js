import React, { Component } from 'react';

class Book extends Component{
    render() {
        return (
            <div>
               <h1 id="bookTitle">{this.props.title}</h1>
               <h6 id="bookAuthor">{this.props.author}</h6>
               <img src={this.props.authorImg} alt="Book"/>
               <p id="bookInfo">{this.props.description}</p>
            </div>
        )
    }
}
export default Book