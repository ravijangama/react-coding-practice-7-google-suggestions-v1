// Write your code here
import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  clickOnArrow = () => {
    const {suggestionName, arrow} = this.props
    const {suggestion} = suggestionName
    arrow(suggestion)
  }

  render() {
    const {suggestionName} = this.props
    const {suggestion} = suggestionName

    const jsxElement = (
      <li className="li-container">
        <p className="suggest">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-image"
          onClick={this.clickOnArrow}
        />
      </li>
    )
    return jsxElement
  }
}
export default SuggestionItem
