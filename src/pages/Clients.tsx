import { useState } from 'react';
import { Search, Plus, Filter, SortAsc } from 'lucide-react';
import ClientList from '../components/clients/ClientList';
import ClientDetails from '../components/clients/ClientDetails';

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  status: 'active' | 'inactive' | 'potential';
  assignedTo: string;
  company?: string;
  dateAdded: string;
  avatar: string;
}

const Clients = () => {
  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const mockClients: Client[] = [
    {
      id: '1',
      name: 'Robert Johnson',
      email: 'robert.johnson@example.com',
      phone: '(555) 123-4567',
      address: '123 Main St, San Francisco, CA 94105',
      status: 'active',
      assignedTo: 'Sarah Johnson',
      dateAdded: '2024-08-15',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '2',
      name: 'Sarah Davis',
      email: 'sarah.davis@example.com',
      phone: '(555) 987-6543',
      address: '456 Oak Ave, Los Angeles, CA 90001',
      status: 'active',
      assignedTo: 'David Kim',
      dateAdded: '2024-07-23',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '3',
      name: 'Thompson Tech Inc.',
      email: 'contact@thompsontech.com',
      phone: '(555) 555-1212',
      address: '789 Market St, San Francisco, CA 94103',
      status: 'active',
      assignedTo: 'Sarah Johnson',
      company: 'Thompson Tech Inc.',
      dateAdded: '2024-06-10',
      avatar: 'https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '4',
      name: 'Williams Family',
      email: 'john.williams@example.com',
      phone: '(555) 444-3333',
      address: '321 Pine St, San Diego, CA 92101',
      status: 'potential',
      assignedTo: 'Michelle Lee',
      dateAdded: '2024-08-02',
      avatar: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '5',
      name: 'Alex Rodriguez',
      email: 'alex.rodriguez@example.com',
      phone: '(555) 222-1111',
      address: '555 Ocean Blvd, Long Beach, CA 90802',
      status: 'inactive',
      assignedTo: 'James Wilson',
      dateAdded: '2023-11-15',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
  ];

  const filteredClients = mockClients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (client.company && client.company.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const toggleClientDetails = (clientId: string) => {
    setSelectedClient(clientId === selectedClient ? null : clientId);
  };

  const currentClient = mockClients.find(client => client.id === selectedClient);

  return (
    <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
      <div className={`bg-white shadow rounded-lg overflow-hidden flex-1 ${selectedClient ? 'lg:w-2/3' : 'w-full'}`}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
            <h2 className="text-lg font-medium text-gray-900">Clients</h2>
            <div className="flex space-x-2">
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                  placeholder="Search clients"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="inline-flex items-center p-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                <Filter className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center p-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                <SortAsc className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                <Plus className="h-4 w-4 mr-1" />
                Add Client
              </button>
            </div>
          </div>
        </div>
        <ClientList 
          clients={filteredClients} 
          selectedClient={selectedClient}
          toggleClientDetails={toggleClientDetails}
        />
      </div>

      {selectedClient && currentClient && (
        <div className="bg-white shadow rounded-lg overflow-hidden lg:w-1/3">
          <ClientDetails 
            client={currentClient} 
            onClose={() => setSelectedClient(null)} 
          />
        </div>
      )}
    </div>
  );
};

export default Clients;