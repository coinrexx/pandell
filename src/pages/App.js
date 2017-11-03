import React, { Component } from 'react';
import '../styles/app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      unShuffledArray: [],
      shuffledArray: []
    }
  }

  componentWillMount() {
   this.arrayGen(10000)
 }

  // The fucntion arrayGen utilizes both the Array.prototype.map() and the
  // Array.prototype.fill() methods. This fucntion initializes an array of
  // var 'num' size, fills that array will ones, then maps the value + the
  // index to that array position. Which results in an array of length num,
  // where array[0] is 1 and array[num] is num.

  arrayGen = (num) => {
    let unShuffledArray = Array(num).fill(1).map((val, i) => val + i)
    this.shuffleArray(unShuffledArray)
    this.setState({unShuffledArray})
  }

  // The function shuffleArray is an O(n) implementation of the Fisher–Yates shuffle algorithm.
  // Instead of searching through the entire unShuffledArray, this algorithm utilizes the array size.
  // What is meant by this, is each iteration of the while loop a random number is selcted from those
  // numbers which havent been shuffled yet. The randomUnShuffledNum then swaps places with the
  // currentArrayElement.

  shuffleArray = (array) => {
    let numsToShuffle = array.length
    while (numsToShuffle) {
      let randomUnShuffledNum = Math.floor(Math.random() * numsToShuffle--)
      let currentArrayElement = array[numsToShuffle]
      array[numsToShuffle] = array[randomUnShuffledNum]
      array[randomUnShuffledNum] = currentArrayElement
    }
    this.setState({shuffledArray: array})
  }

  // The function displayCards takes in an array an prints one
  // 'card' per element in the array

  displayCards = (array) => {
    let numList = []
    array.forEach(function(val, i){
      let number = array[i]
      let listItem = (
        <div key={i} className='card flexx' >
          <h3>#{i+1}</h3>
          <h2> {number} </h2>
        </div>
      )
      numList.push(listItem)
    })
    return numList
  }

  render() {
    return (
      <div className="App flexx wrap">
        <div className='header'>
          <div className='contentWrapper'>
            <h1> Pandell </h1>
            <h2> 1 - 10,000 Random List </h2>
            <div className='shuffleButton' onClick={()=>{this.shuffleArray(this.state.unShuffledArray)}}>
              Shuffle Again
            </div>
          </div>
        </div>
        <div className='listWrapper flexx wrap'>
          {this.displayCards(this.state.shuffledArray)}
        </div>
      </div>
    );
  }
}

export default App;
