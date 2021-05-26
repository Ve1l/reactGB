import React from 'react'

export class Chat extends React.Component {
  render() {
    const { title, handleListItemClick, selected } = this.props
    return <div>{title}</div>
  }
}
