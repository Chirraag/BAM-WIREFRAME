import { User, Building, Calendar, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { Client } from '../../pages/Clients';

interface ClientListProps {
  clients: Client[];
  selectedClient: string | null;
  toggleClientDetails: (clientId: string) => void;
}

const ClientList = ({ clients, selectedClient, toggleClientDetails }: ClientListProps) => {
  const getStatusIcon = (status: Client['status']) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'inactive':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'potential':
        return <Clock className="h-4 w-4 text-amber-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: Client['status']) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'inactive':
        return 'Inactive';
      case 'potential':
        return 'Potential';
      default:
        return '';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="overflow-hidden">
      {clients.length === 0 ? (
        <div className="text-center py-8">
          <User className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No clients found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search or filters to find what you're looking for.
          </p>
        </div>
      ) : (
        <ul className="divide-y divide-gray-200">
          {clients.map((client) => (
            <li
              key={client.id}
              className={`hover:bg-gray-50 ${selectedClient === client.id ? 'bg-amber-50' : ''}`}
            >
              <button
                className="w-full px-6 py-4 focus:outline-none"
                onClick={() => toggleClientDetails(client.id)}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={client.avatar}
                      alt={`${client.name}'s avatar`}
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">{client.name}</h3>
                        <div className="mt-1 flex items-center">
                          {client.company ? (
                            <span className="flex items-center text-sm text-gray-500">
                              <Building className="flex-shrink-0 mr-1 h-4 w-4 text-gray-400" />
                              {client.company}
                            </span>
                          ) : (
                            <span className="flex items-center text-sm text-gray-500">
                              <User className="flex-shrink-0 mr-1 h-4 w-4 text-gray-400" />
                              Individual
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm">
                          {getStatusIcon(client.status)}
                          <span className={`ml-1 ${
                            client.status === 'active' ? 'text-green-800' : 
                            client.status === 'inactive' ? 'text-red-800' : 'text-amber-800'
                          }`}>
                            {getStatusText(client.status)}
                          </span>
                        </div>
                        <div className="mt-1 flex items-center text-sm text-gray-500">
                          <Calendar className="flex-shrink-0 mr-1 h-4 w-4 text-gray-400" />
                          Added {formatDate(client.dateAdded)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClientList;