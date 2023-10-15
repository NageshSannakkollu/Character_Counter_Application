import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import WordItem from './components/WordItem'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    characterCountList: [],
    inputMessage: '',
  }

  addWordToCounter = event => {
    event.preventDefault()
    const {inputMessage} = this.state
    const newWord = {
      id: uuidv4(),
      name: inputMessage,
      lengthOfWord: inputMessage.length,
    }
    this.setState(prevState => ({
      characterCountList: [...prevState.characterCountList, newWord],
      inputMessage: '',
    }))
  }

  onChangeInputMessage = event => {
    this.setState({inputMessage: event.target.value})
  }

  render() {
    const {characterCountList, inputMessage} = this.state
    const wordLength = characterCountList.length
    console.log(wordLength)
    return (
      <div className="app-container">
        <div className="character-counter-container">
          <div className="count-container">
            <h3>Count the Characters like a Boss...</h3>
            {wordLength === 0 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="zero-inputs-image"
              />
            ) : (
              <ul className="un-ordered-list">
                {characterCountList.map(eachWord => (
                  <WordItem wordDetails={eachWord} key={eachWord.id} />
                ))}
              </ul>
            )}
          </div>

          <form
            className="characters-container"
            onSubmit={this.addWordToCounter}
          >
            <h2 className="character-counter-heading">Character Counter</h2>
            <div className="input-and-button-container">
              <input
                type="text"
                className="character-input"
                placeholder="Enter the Characters here"
                value={inputMessage}
                onChange={this.onChangeInputMessage}
              />
              <button type="submit" className="add-button">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default App
