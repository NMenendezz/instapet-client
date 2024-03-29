import Styles from '@/components/message/message.module.css';
import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext)
  const { sender, text, seen } = message
  const timestamp = new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <p
      className={`
        ${Styles.message} 
        ${sender === currentUser._id
          ? Styles.message_sent
          : Styles.message_received} 
        ${!seen && sender !== currentUser._id
          ? Styles.unread
          : ''}
      `}>
      {text}
      <span className={Styles.timestamp}>{timestamp}</span>
    </p>
  )
}

export default Message