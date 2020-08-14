import React, { Component } from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Title from "./components/Title";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the cards json array
  state = {
    cards: cards,
    clicked: [],
    score: 0,
    hiScore: 0,
    message: "Click an image to begin!"
  };

  handleShuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  handleClick = (id) => {
   
    if (this.state.clicked.indexOf(id) === -1) {
      this.setState(
        {
          cards: cards,
          clicked: this.state.clicked.concat(id),
          score: this.state.score + 1,
          hiScore: (this.state.hiScore > this.state.score) ? this.state.hiScore : this.state.hiScore + 1,
          message: "You guessed correctly!"
        }
      );
    } else {
      this.setState(
        {
          cards: cards,
          clicked: [],
          score: 0,
          topScore: (this.state.score > this.state.hiScore) ? this.state.score : this.state.hiScore,
          message: "You guessed incorrectly!"
        }
      );
    }
    this.handleShuffleArray(cards);
  }

  // Map over this.state.friends and render a component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav
          brand="Clicky Game"
          message={this.state.message}
          score={this.state.score}
          hiScore={this.state.hiScore}
        />
        <Title subtitle="Click on an image to earn points, but don't click on the same more than once!">Clicky Game: Naruto Uzomaki Edition</Title>
        {this.state.cards.map(cards => (
          <Cards
            handleClick={this.handleClick}
            id={cards.id}
            key={cards.id}
            name={cards.name}
            message={this.state.message}
            image={process.env.PUBLIC_URL+cards.image}
            score={this.state.score}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;