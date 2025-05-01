import { useState } from 'react';
import ConversationList from '../components/messaging/ConversationList';
import MessagePane from '../components/messaging/MessagePane';
import { MessageType } from '../types/messaging';

export type Conversation = {
  id: string;
  name: string;
  phone: string;
  lastMessage: string;
  lastMessageTime: string;
  unread: number;
  type: MessageType;
};

const Messaging = () => {
  const [activeConversation, setActiveConversation] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState<MessageType>("all");

  const conversations: Conversation[] = [
    {
      id: '1',
      name: 'Robert Johnson',
      phone: '(555) 123-4567',
      lastMessage: 'Appointment reminder sent.',
      lastMessageTime: '10:32 AM',
      unread: 0,
      type: 'whatsapp'
    },
    {
      id: '2',
      name: 'Sarah Davis',
      phone: '(555) 987-6543',
      lastMessage: 'Meeting confirmation sent.',
      lastMessageTime: 'Yesterday',
      unread: 0,
      type: 'email'
    },
    {
      id: '3',
      name: 'Thompson Tech',
      phone: '(555) 555-1212',
      lastMessage: 'Follow-up message sent.',
      lastMessageTime: 'Yesterday',
      unread: 0,
      type: 'sms'
    },
    {
      id: '4',
      name: 'Williams Family',
      phone: '(555) 444-3333',
      lastMessage: 'Consultation reminder sent.',
      lastMessageTime: 'Monday',
      unread: 0,
      type: 'whatsapp'
    }
  ];

  const filteredConversations = currentTab === 'all' 
    ? conversations 
    : conversations.filter(c => c.type === currentTab);

  return (
    <div className="flex flex-col md:flex-row bg-white shadow rounded-lg overflow-hidden h-[calc(100vh-10rem)]">
      <ConversationList 
        conversations={filteredConversations} 
        activeConversation={activeConversation}
        setActiveConversation={setActiveConversation}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <MessagePane 
        conversationId={activeConversation} 
        conversation={conversations.find(c => c.id === activeConversation)}
      />
    </div>
  );
};

export default Messaging;