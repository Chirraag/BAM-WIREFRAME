import { useState } from 'react';
import { Search, Plus, Filter, SortAsc } from 'lucide-react';
import CaseList from '../components/cases/CaseList';

export interface Case {
  id: string;
  title: string;
  clientName: string;
  type: string;
  status: 'intake' | 'active' | 'discovery' | 'review' | 'negotiation' | 'trial' | 'closed';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  assignedTo: string[];
  progress: number;
}

const Cases = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  
  const mockCases: Case[] = [
    {
      id: 'C-1245',
      title: 'Johnson vs. Smith LLC',
      clientName: 'Robert Johnson',
      type: 'Corporate Litigation',
      status: 'active',
      priority: 'high',
      dueDate: '2025-10-15',
      assignedTo: ['Sarah Johnson'],
      progress: 65,
    },
    {
      id: 'C-1243',
      title: 'Estate of William Davis',
      clientName: 'Sarah Davis',
      type: 'Estate Planning',
      status: 'review',
      priority: 'medium',
      dueDate: '2025-10-30',
      assignedTo: ['David Kim', 'Michelle Lee'],
      progress: 40,
    },
    {
      id: 'C-1238',
      title: 'Thompson Intellectual Property',
      clientName: 'Thompson Tech Inc.',
      type: 'IP Protection',
      status: 'discovery',
      priority: 'high',
      dueDate: '2025-11-12',
      assignedTo: ['James Wilson'],
      progress: 25,
    },
    {
      id: 'C-1235',
      title: 'Williams Family Trust',
      clientName: 'Williams Family',
      type: 'Estate Planning',
      status: 'closed',
      priority: 'low',
      dueDate: '2025-08-20',
      assignedTo: ['Michelle Lee'],
      progress: 100,
    },
    {
      id: 'C-1233',
      title: 'Rodriguez Divorce Proceedings',
      clientName: 'Alex Rodriguez',
      type: 'Family Law',
      status: 'negotiation',
      priority: 'medium',
      dueDate: '2025-09-05',
      assignedTo: ['Sarah Johnson', 'David Kim'],
      progress: 75,
    },
  ];

  const statusOptions = [
    { value: 'all', label: 'All Cases' },
    { value: 'intake', label: 'Intake' },
    { value: 'active', label: 'Active' },
    { value: 'discovery', label: 'Discovery' },
    { value: 'review', label: 'Review' },
    { value: 'negotiation', label: 'Negotiation' },
    { value: 'trial', label: 'Trial' },
    { value: 'closed', label: 'Closed' },
  ];

  const filteredCases = mockCases.filter(caseItem => {
    const matchesSearch = 
      caseItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caseItem.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caseItem.type.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = selectedStatus === 'all' || caseItem.status === selectedStatus;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
          <h2 className="text-lg font-medium text-gray-900">Cases</h2>
          <div className="flex space-x-2">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                placeholder="Search cases"
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
              New Case
            </button>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="sm:flex sm:items-center space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2 sm:pr-6">
              <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700">
                Status:
              </label>
              <select
                id="status-filter"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm rounded-md"
              >
                {statusOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <CaseList cases={filteredCases} />
    </div>
  );
};

export default Cases;