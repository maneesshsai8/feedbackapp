// Write your React code here.
import {Component} from 'react'

import './index.css'

import ResourceList from '../ResourceList'

class Feedback extends Component {
  state = {...this.props, status: false}

  happy = name => {
    if (name === 'Happy') {
      this.setState({status: true})
    }
  }

  render() {
    const {resources, status} = this.state

    const {emojis, loveEmojiUrl} = resources

    if (status === false) {
      return (
        <div className="bg-container">
          <div className="card">
            <h1>
              How satisfied are you with our customer support performance?
            </h1>
            <ul>
              {emojis.map(each => (
                <ResourceList
                  eachEmoji={each}
                  key={each.id}
                  happy={this.happy}
                />
              ))}
            </ul>
          </div>
        </div>
      )
    }
    return (
      <div className="bg-container">
        <div className="card1">
          <img src={loveEmojiUrl} className="image" alt="love emoji" />
          <h1>Thank You!</h1>
          <p className="para">
            we will use your feedback and increase our customer support
            performance
          </p>
        </div>
      </div>
    )
  }
}

export default Feedback
