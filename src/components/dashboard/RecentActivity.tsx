import { Clock, User, File, MessageCircle, Phone } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      user: 'Sarah Johnson',
      action: 'added a document',
      target: 'Henderson Patent Application',
      time: '10 minutes ago',
      icon: File,
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-100',
    },
    {
      id: 2,
      user: 'David Kim',
      action: 'sent an email to',
      target: 'Robert Thompson',
      time: '1 hour ago',
      icon: MessageCircle,
      iconColor: 'text-green-500',
      iconBg: 'bg-green-100',
    },
    {
      id: 3,
      user: 'Alex Rodriguez',
      action: 'scheduled a meeting with',
      target: 'Williams Family',
      time: '3 hours ago',
      icon: Clock,
      iconColor: 'text-purple-500',
      iconBg: 'bg-purple-100',
    },
    {
      id: 4,
      user: 'Michelle Lee',
      action: 'made a voice call to',
      target: 'Thompson Tech Inc.',
      time: '5 hours ago',
      icon: Phone,
      iconColor: 'text-amber-500',
      iconBg: 'bg-amber-100',
    },
    {
      id: 5,
      user: 'James Wilson',
      action: 'added a new client',
      target: 'Evergreen Properties LLC',
      time: '1 day ago',
      icon: User,
      iconColor: 'text-red-500',
      iconBg: 'bg-red-100',
    },
  ];

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="p-5 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
          <button className="text-sm font-medium text-amber-600 hover:text-amber-500">View all</button>
        </div>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200">
          {activities.map((activity) => (
            <li key={activity.id} className="p-5 hover:bg-gray-50 transition-colors duration-150 ease-in-out">
              <div className="flex items-center space-x-4">
                <div className={`flex-shrink-0 h-10 w-10 rounded-full ${activity.iconBg} flex items-center justify-center`}>
                  <activity.icon className={`h-5 w-5 ${activity.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {activity.user} {activity.action}{' '}
                    <span className="font-semibold">{activity.target}</span>
                  </p>
                  <p className="text-sm text-gray-500 flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    {activity.time}
                  </p>
                </div>
                <div>
                  <button className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-amber-700 bg-amber-100 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                    View
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentActivity;