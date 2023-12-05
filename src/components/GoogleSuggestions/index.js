// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeTextInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickArrow = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachSuggest =>
      eachSuggest.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const jsxElement = (
      <div className="bg-container">
        <div className="sub-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
            alt="google logo"
            className="google-image"
          />
          <div className="google-search-container">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="search-text"
                onChange={this.onChangeTextInput}
                value={searchInput}
              />
            </div>
            <ul className="ul-container">
              {searchResults.map(eachSuggestion => (
                <SuggestionItem
                  suggestionName={eachSuggestion}
                  key={eachSuggestion.id}
                  arrow={this.onClickArrow}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
    return jsxElement
  }
}
export default GoogleSuggestions
