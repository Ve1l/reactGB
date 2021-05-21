import React from 'react'
import { Message } from '../message'

export class MessageField extends React.Component {
  state = {
    messages: [{ author: 'User', value: 'Hello' }],
  }

  componentDidUpdate() {
    const { messages } = this.state

    const lastMessage = messages[messages.length - 1]

    if (lastMessage.author == 'User') {
      setTimeout(() => {
        this.setState({
          messages: [...messages, { author: 'Bot', value: "No, I'm Bot" }],
        })
      }, 1000)
    }
  }

  sendMessage = () => {
    const { messages } = this.state

    this.setState({
      messages: [...messages, { author: 'User', value: 'Are you bot' }],
    })
  }

  render() {
    const { messages } = this.state

    return (
      <div>
        <button onClick={this.sendMessage}>Send</button>
        {messages.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>
    )
  }
}
