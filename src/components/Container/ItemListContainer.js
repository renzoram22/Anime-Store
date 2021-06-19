import React from 'react'
import { Message } from 'semantic-ui-react'
import './ItemListContainer.css';

const MessageExampleMessageProps = (props) => (
  <Message
    header={props.message}
    content={props.name}
  />
)

export default MessageExampleMessageProps
