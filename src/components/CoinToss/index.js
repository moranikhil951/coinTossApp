// Write your code here

import {Component} from 'react'

import './index.css'

const imageCoin = [
  {
    id: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
  },
]

class CoinToss extends Component {
  state = {
    HeadsOrTails: imageCoin[0].imageUrl,
    heads: 0,
    tails: 0,
    total: 0,
  }

  resultsButton = () => {
    const {heads, tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)

    this.setState({HeadsOrTails: imageCoin[tossResult].imageUrl})

    let headsCount = heads
    let tailsCount = tails

    if (tossResult === 0) {
      headsCount += 1
    } else {
      tailsCount += 1
    }

    this.setState({heads: headsCount, tails: tailsCount})
    this.setState({total: headsCount + tailsCount})
  }

  render() {
    const {total} = this.state
    const {HeadsOrTails, heads, tails} = this.state

    return (
      <div className="container">
        <div className="toss-container">
          <h1 className="coin-heading">Coin Toss Game</h1>
          <p className="headsOrtailsPara">Heads (or) Tails</p>
          <img alt="toss result" src={HeadsOrTails} className="imagedUrl" />
          <div>
            <button
              type="button"
              className="button"
              onClick={this.resultsButton}
            >
              Toss Coin
            </button>
          </div>
          <ul className="unordered-list">
            <p className="list_toss">Total: {total}</p>
            <p className="list_toss">Heads: {heads}</p>
            <p className="list_toss">Tails: {tails}</p>
          </ul>
        </div>
      </div>
    )
  }
}

export default CoinToss
