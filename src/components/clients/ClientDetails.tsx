import { X, Mail, Phone, MapPin, Edit, Trash, Calendar, User, MoreHorizontal, FileText, MessageSquare } from 'lucide-react';
import { Client } from '../../pages/Clients';

interface ClientDetailsProps {
  client: Client;
  onClose: () => void;
}

interface CaseItem {
  id: string;
  title: string;
  type: string;
  status: string;
  date: string;
}

interface NoteItem {
  id: string;
  text: string;
  date: string;
  author: string;
}

const ClientDetails = ({ client, onClose }: ClientDetailsProps) => {
  // Mock cases data
  const cases: CaseItem[] = [
    {
      id: 'C-1245',
      title: 'Johnson vs. Smith LLC',
      type: 'Corporate Litigation',
      status: 'Active',
      date: 'Oct 15, 2025',
    },
    {
      id: 'C-1203',
      title: 'Estate Planning',
      type: 'Estate Planning',
      status: 'Completed',
      date: 'Jul 20, 2025',
    },
  ];

  // Mock notes data
  const notes: NoteItem[] = [
    {
      id: 'N1',
      text: 'Client expressed concerns about timeline for settlement negotiations.',
      date: 'Oct 2, 2025',
      author: 'Sarah Johnson',
    },
    {
      id: 'N2',
      text: 'Discussed the possibility of mediation instead of going to trial.',
      date: 'Sep 29, 2025',
      author: 'David Kim',
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-900">Client Details</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-500"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center">
          <img
            src={client.avatar}
            alt={`${client.name}'s avatar`}
            className="h-14 w-14 rounded-full"
          />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">{client.name}</h3>
            {client.company && (
              <p className="text-sm text-gray-500">{client.company}</p>
            )}
            <div className="mt-1 flex items-center text-sm">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                client.status === 'active' ? 'bg-green-100 text-green-800' : 
                client.status === 'inactive' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
              }`}>
                {client.status === 'active' ? 'Active Client' : 
                 client.status === 'inactive' ? 'Inactive Client' : 'Potential Client'}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 border-b border-gray-200">
          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Contact Information</h4>
          <div className="space-y-3">
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p className="text-sm text-gray-900">{client.email}</p>
                <p className="text-xs text-gray-500">Email</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p className="text-sm text-gray-900">{client.phone}</p>
                <p className="text-xs text-gray-500">Phone</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p className="text-sm text-gray-900">{client.address}</p>
                <p className="text-xs text-gray-500">Address</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Cases</h4>
            <button className="text-sm text-amber-600 hover:text-amber-700">View All</button>
          </div>
          
          {cases.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {cases.map((caseItem) => (
                <li key={caseItem.id} className="py-3">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{caseItem.title}</p>
                      <div className="mt-1 flex items-center">
                        <FileText className="mr-1 h-3 w-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{caseItem.type}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        caseItem.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {caseItem.status}
                      </span>
                      <div className="mt-1 flex items-center justify-end text-xs text-gray-500">
                        <Calendar className="mr-1 h-3 w-3" />
                        {caseItem.date}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500 py-2">No cases found.</p>
          )}
        </div>
        
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Notes</h4>
            <button className="text-sm text-amber-600 hover:text-amber-700">Add Note</button>
          </div>
          
          {notes.length > 0 ? (
            <ul className="space-y-3">
              {notes.map((note) => (
                <li key={note.id} className="bg-gray-50 p-3 rounded-md">
                  <div className="flex justify-between items-start">
                    <p className="text-sm text-gray-900">{note.text}</p>
                    <button className="text-gray-400 hover:text-gray-500 ml-2">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-2 flex items-center text-xs text-gray-500">
                    <User className="mr-1 h-3 w-3" />
                    {note.author} | <Calendar className="mx-1 h-3 w-3" /> {note.date}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500 py-2">No notes found.</p>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Recent Communications</h4>
            <button className="text-sm text-amber-600 hover:text-amber-700">View All</button>
          </div>
          
          <ul className="divide-y divide-gray-200">
            <li className="py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full">
                    <MessageSquare className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">WhatsApp Message</p>
                    <p className="text-xs text-gray-500">Thank you for the update on my case.</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">Today</span>
              </div>
            </li>
            <li className="py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Mail className="h-4 w-4 text-amber-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <p className="text-xs text-gray-500">Contract review comments</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">Yesterday</span>
              </div>
            </li>
            <li className="py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <MessageSquare className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">SMS</p>
                    <p className="text-xs text-gray-500">Meeting confirmation</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">Oct 11</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-200 flex justify-between">
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
          <MessageSquare className="mr-2 h-4 w-4" />
          Message
        </button>
        <div className="flex space-x-2">
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </button>
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;