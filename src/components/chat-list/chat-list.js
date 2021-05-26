import React from 'react'
import { Chat } from './chat'

export class ChatList extends React.Component {
  state = {
    chats: ['romm1', 'room2', 'room3'],
    selectedIndex: 0,
  }

  render() {
    const { chats, selectedIndex } = this.state

    return (
      <div>
        {chats.map((chat, index) => (
          <Chat title={chat} key={index} selected={selectedIndex} />
        ))}
      </div>
    )
  }
}
