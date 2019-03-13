import React, { Component } from 'react';
import Book from './Book';
import './App.css';

class App extends Component {
  render() {
    const book = {
      Title: "The Stinky Cheese Man: and other Fairly Stupid Tales",
      Author: "By Jon Scieszka & Lane Smith",
      authorImg: "https://images-na.ssl-images-amazon.com/images/I/611tCcAdSSL._SX411_BO1,204,203,200_.jpg",
      Description: "If geese had graves, Mother Goose would be rolling in hers. The Stinky Cheese Man and Other Fairly Stupid Tales retells--and wreaks havoc on--the allegories we all thought we knew by heart. In these irreverent variations on well-known themes, the ugly duckling grows up to be an ugly duck, and the princess who kisses the frog wins only a mouthful of amphibian slime. The Stinky Cheese Man deconstructs not only the tradition of the fairy tale but also the entire notion of a book. Our naughty narrator, Jack, makes a mockery of the title page, the table of contents, and even the endpaper by shuffling, scoffing, and generally paying no mind to structure. Characters slide in and out of tales; Cinderella rebuffs Rumpelstiltskin, and the Giant at the top of the beanstalk snacks on the Little Red Hen. There are no lessons to be learned or morals to take to heart--just good, sarcastic fun that smart-alecks of all ages will love."
    }
    return (
      <div className="App">
        <header className="App-header">
          <Book title = {book.Title} 
          author = {book.Author} 
          authorImg = {book.authorImg} 
          description = {book.Description}/>
        </header>
      </div>
    );
  }
}

export default App;
