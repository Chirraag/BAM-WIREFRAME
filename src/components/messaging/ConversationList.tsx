import { Search, Plus, Mail, MessageSquare, Phone } from 'lucide-react';
import { Conversation } from '../../pages/Messaging';
import { MessageType } from '../../types/messaging';

interface ConversationListProps {
  conversations: Conversation[];
  activeConversation: string | null;
  setActiveConversation: (id: string) => void;
  currentTab: MessageType;
  setCurrentTab: (tab: MessageType) => void;
}

const ConversationList = ({ 
  conversations,
  activeConversation,
  setActiveConversation,
  currentTab,
  setCurrentTab
}: ConversationListProps) => {
  const tabs = [
    { id: 'all' as MessageType, name: 'All' },
    { id: 'whatsapp' as MessageType, name: 'WhatsApp', icon: MessageSquare, color: 'text-green-500' },
    { id: 'sms' as MessageType, name: 'SMS', icon: MessageSquare, color: 'text-blue-500' },
    { id: 'email' as MessageType, name: 'Email', icon: Mail, color: 'text-amber-500' }
  ];

  const getMessageTypeIcon = (type: MessageType) => {
    switch (type) {
      case 'whatsapp':
        return <MessageSquare className="h-4 w-4 text-green-500" />;
      case 'sms':
        return <MessageSquare className="h-4 w-4 text-blue-500" />;
      case 'email':
        return <Mail className="h-4 w-4 text-amber-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full md:w-80 border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
          <button className="text-sm text-amber-600 hover:text-amber-700 font-medium flex items-center">
            <Plus className="h-4 w-4 mr-1" />
            New
          </button>
        </div>
        <div className="relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
            placeholder="Search messages"
          />
        </div>
      </div>
      
      <div className="border-b border-gray-200">
        <nav className="flex space-x-4 px-4 py-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setCurrentTab(tab.id)}
              className={`${
                currentTab === tab.id
                  ? 'text-amber-600 border-b-2 border-amber-500'
                  : 'text-gray-500 hover:text-gray-700'
              } whitespace-nowrap px-1 py-2 font-medium text-sm flex items-center`}
            >
              {tab.icon && <tab.icon className={`mr-1 h-4 w-4 ${tab.color || ''}`} />}
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
      
      <div className="overflow-y-auto flex-1">
        <ul className="divide-y divide-gray-200">
          {conversations.map((conversation) => (
            <li key={conversation.id}>
              <button
                className={`w-full px-4 py-3 hover:bg-gray-50 focus:outline-none ${
                  activeConversation === conversation.id ? 'bg-amber-50' : ''
                }`}
                onClick={() => setActiveConversation(conversation.id)}
              >
                <div className="flex items-center">
                  <div className="relative flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={`https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                      alt={`${conversation.name}'s avatar`}
                    />
                    {conversation.isOnline !== undefined && (
                      <span className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white ${
                        conversation.isOnline ? 'bg-green-400' : 'bg-gray-300'
                      }`} />
                    )}
                  </div>
                  <div className="ml-3 flex-1 min-w-0 text-left">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900 truncate">{conversation.name}</p>
                      <div className="flex items-center">
                        {getMessageTypeIcon(conversation.type)}
                        <p className="ml-1 text-xs text-gray-500">{conversation.lastMessageTime}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                      {conversation.unread > 0 && (
                        <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-amber-500 text-white text-xs font-medium">
                          {conversation.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ConversationList;