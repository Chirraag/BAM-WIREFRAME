import { FileText, Users, Clock, Tag } from 'lucide-react';

const ActiveCases = () => {
  const cases = [
    {
      id: 'C-1245',
      title: 'Johnson vs. Smith LLC',
      client: 'Robert Johnson',
      type: 'Corporate Litigation',
      status: 'In Progress',
      priority: 'High',
      deadline: 'Oct 15, 2025',
      progress: 65,
    },
    {
      id: 'C-1243',
      title: 'Estate of William Davis',
      client: 'Sarah Davis',
      type: 'Estate Planning',
      status: 'Review',
      priority: 'Medium',
      deadline: 'Oct 30, 2025',
      progress: 40,
    },
    {
      id: 'C-1238',
      title: 'Thompson Intellectual Property',
      client: 'Thompson Tech Inc.',
      type: 'IP Protection',
      status: 'Discovery',
      priority: 'High',
      deadline: 'Nov 12, 2025',
      progress: 25,
    },
  ];

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Active Cases</h3>
          <button className="text-sm font-medium text-amber-600 hover:text-amber-500">View all</button>
        </div>
      </div>
      <ul className="divide-y divide-gray-200">
        {cases.map((caseItem) => (
          <li key={caseItem.id} className="p-5 hover:bg-gray-50 transition-colors duration-150 ease-in-out">
            <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
              <div>
                <div className="flex items-center">
                  <FileText className="flex-shrink-0 h-5 w-5 text-gray-400" />
                  <div className="ml-2">
                    <span className="text-sm font-medium text-gray-900">{caseItem.title}</span>
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {caseItem.id}
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <Users className="flex-shrink-0 mr-1 h-4 w-4 text-gray-400" />
                  {caseItem.client}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  caseItem.priority === 'High' 
                    ? 'bg-red-100 text-red-800' 
                    : caseItem.priority === 'Medium'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  <Tag className="mr-1 h-3 w-3" />
                  {caseItem.priority}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  {caseItem.status}
                </span>
                <span className="inline-flex items-center text-xs text-gray-500">
                  <Clock className="mr-1 h-3 w-3" />
                  Due {caseItem.deadline}
                </span>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Progress</span>
                <span className="font-medium text-gray-900">{caseItem.progress}%</span>
              </div>
              <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    caseItem.priority === 'High' 
                      ? 'bg-red-600' 
                      : caseItem.priority === 'Medium'
                      ? 'bg-yellow-500'
                      : 'bg-green-500'
                  }`} 
                  style={{ width: `${caseItem.progress}%` }}
                ></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <div className="text-sm">
          <button className="font-medium text-amber-600 hover:text-amber-500 mr-5">Add New Case</button>
          <button className="font-medium text-gray-500 hover:text-gray-700">Export Cases</button>
        </div>
      </div>
    </div>
  );
};

export default ActiveCases;