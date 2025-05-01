import { useState } from 'react';
import { Send, Paperclip, Phone, MoreVertical, MessageSquare, Mail } from 'lucide-react';
import { Conversation } from '../../pages/Messaging';
import { MessageType } from '../../types/messaging';

interface MessagePaneProps {
  conversationId: string | null;
  conversation?: Conversation;
}

interface Message {
  id: string;
  text: string;
  time: string;
  sender: 'user';
  read: boolean;
}

const MessagePane = ({ conversationId, conversation }: MessagePaneProps) => {
  const [newMessage, setNewMessage] = useState('');

  // Mock messages data - all outbound
  const messages: Message[] = conversationId ? [
    {
      id: '1',
      text: 'Good morning! This is a reminder about your upcoming appointment tomorrow at 2 PM.',
      time: '9:30 AM',
      sender: 'user',
      read: true
    },
    {
      id: '2',
      text: 'Please let us know if you need to reschedule or have any questions.',
      time: '9:32 AM',
      sender: 'user',
      read: true
    },
    {
      id: '3',
      text: 'Just following up to confirm you received the appointment details.',
      time: '10:15 AM',
      sender: 'user',
      read: false
    }
  ] : [];

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Would add message to the conversation in a real app
      setNewMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const getMessageTypeIcon = (type?: MessageType) => {
    if (!type) return null;

    switch (type) {
      case 'whatsapp':
        return <MessageSquare className="h-5 w-5 text-green-500" />;
      case 'sms':
        return <MessageSquare className="h-5 w-5 text-blue-500" />;
      case 'email':
        return <Mail className="h-5 w-5 text-amber-500" />;
      default:
        return null;
    }
  };

  if (!conversationId) {
    return (
      <div className="hidden md:flex flex-1 justify-center items-center bg-gray-50 text-center p-6">
        <div>
          <div className="flex justify-center">
            <MessageSquare className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="mt-2 text-lg font-medium text-gray-900">Select a conversation</h3>
          <p className="mt-1 text-sm text-gray-500">
            Choose a conversation to send messages
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="border-b border-gray-200 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative">
            <img
              className="h-10 w-10 rounded-full"
              src={`https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
              alt={`${conversation?.name}'s avatar`}
            />
          </div>
          <div className="ml-3">
            <h2 className="text-lg font-medium text-gray-900 flex items-center">
              {conversation?.name}
              {conversation?.type && (
                <span className="ml-2">{getMessageTypeIcon(conversation.type)}</span>
              )}
            </h2>
            <p className="text-sm text-gray-500">{conversation?.phone}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100">
            <Phone className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex justify-end">
            <div className="max-w-xs lg:max-w-md px-4 py-2 rounded-lg bg-amber-100 text-amber-900">
              <p className="text-sm">{message.text}</p>
              <div className="mt-1 text-xs flex items-center justify-end">
                <span className="text-amber-600">{message.time}</span>
                <span className="ml-1 text-amber-600">
                  {message.read ? '✓✓' : '✓'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-start space-x-3">
          <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100">
            <Paperclip className="h-5 w-5" />
          </button>
          <div className="flex-1 relative">
            <textarea
              rows={1}
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 sm:text-sm resize-none"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <button
            onClick={sendMessage}
            disabled={!newMessage.trim()}
            className="p-2 rounded-full text-white bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessagePane;