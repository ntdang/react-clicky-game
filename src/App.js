import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set this.state
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    message: "",
    clicked: [],
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      message: "Good pick!"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ message: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      message: "!",
      clicked: []
    });
    this.handleShuffle();
  };


  render() {
    return (
      <Wrapper>
      <FriendCard
        image={friends[0].image}
      />
      <FriendCard
      image={friends[1].image}
    />
    </Wrapper>
    );
  }
}

export default App;
