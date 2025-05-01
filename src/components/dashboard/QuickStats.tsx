import { Users, MessageSquare, Calendar as CalendarIcon, Phone } from 'lucide-react';

const QuickStats = () => {
  const stats = [
    {
      name: 'Active Clients',
      value: '42',
      icon: Users,
      change: '+5%',
      changeType: 'increase',
    },
    {
      name: 'Messages',
      value: '156',
      icon: MessageSquare,
      change: '+12%',
      changeType: 'increase',
    },
    {
      name: 'Scheduled Calls',
      value: '24',
      icon: Phone,
      change: '+8%',
      changeType: 'increase',
    },
    {
      name: 'Appointments',
      value: '18',
      icon: CalendarIcon,
      change: '+15%',
      changeType: 'increase',
    },
  ];

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Quick Stats</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div 
            key={stat.name} 
            className={`p-5 ${index !== stats.length - 1 ? 'sm:border-r border-gray-200' : ''} ${index < stats.length - 2 ? 'border-b sm:border-b-0' : index === stats.length - 2 ? 'border-b sm:border-b-0' : ''}`}
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 rounded-md bg-amber-100 p-3">
                <stat.icon className="h-6 w-6 text-amber-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">{stat.value}</div>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="mt-4">
              <span
                className={`inline-flex items-center text-sm ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.change}
                {stat.changeType === 'increase' ? (
                  <svg className="ml-1 h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                ) : (
                  <svg className="ml-1 h-4 w-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                )}
                <span className="ml-1 text-gray-500">from last month</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickStats;