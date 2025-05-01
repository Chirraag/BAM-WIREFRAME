import { Clock, MapPin, Users, Plus } from 'lucide-react';

interface CalendarSidebarProps {
  selectedDate: Date;
}

const CalendarSidebar = ({ selectedDate }: CalendarSidebarProps) => {
  const formatSelectedDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Mock events data for the selected date
  const mockEvents = [
    {
      id: 1,
      title: 'Client Consultation',
      time: '10:00 AM - 11:00 AM',
      location: 'Conference Room A',
      attendees: ['Robert Johnson', 'Sarah Davis'],
      type: 'meeting'
    },
    {
      id: 2,
      title: 'Document Review Deadline',
      time: '12:00 PM',
      type: 'deadline'
    },
    {
      id: 3,
      title: 'Team Strategy Meeting',
      time: '2:00 PM - 3:30 PM',
      location: "Partner's Room",
      attendees: ['Legal Team', 'Associates'],
      type: 'internal'
    }
  ];

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden h-full">
      <div className="p-5 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">{formatSelectedDate(selectedDate)}</h3>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-sm font-medium text-gray-500">SCHEDULE</h4>
          <button className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center">
            <Plus className="h-4 w-4 mr-1" />
            Add Event
          </button>
        </div>
        
        {mockEvents.length > 0 ? (
          <div className="space-y-4">
            {mockEvents.map((event) => (
              <div 
                key={event.id} 
                className={`p-4 rounded-lg border-l-4 ${
                  event.type === 'meeting' ? 'border-blue-500 bg-blue-50' :
                  event.type === 'deadline' ? 'border-red-500 bg-red-50' :
                  'border-green-500 bg-green-50'
                }`}
              >
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-medium text-gray-900">{event.title}</h4>
                  <button className="text-gray-400 hover:text-gray-500">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  {event.location && (
                    <div className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  )}
                  {event.attendees && (
                    <div className="flex items-center mt-1">
                      <Users className="h-4 w-4 mr-2" />
                      {event.attendees.join(', ')}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-gray-500 text-sm">No events scheduled for this day</p>
            <button className="mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-amber-700 bg-amber-100 hover:bg-amber-200 focus:outline-none">
              <Plus className="h-4 w-4 mr-1" />
              Add Event
            </button>
          </div>
        )}
      </div>
      
      <div className="p-5 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-500 mb-4">REMINDERS</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="reminder-1"
                name="reminder-1"
                type="checkbox"
                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
              />
              <label htmlFor="reminder-1" className="ml-2 block text-sm text-gray-700">
                Prepare documents for Thompson case
              </label>
            </div>
            <span className="text-xs text-gray-500">2:00 PM</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="reminder-2"
                name="reminder-2"
                type="checkbox"
                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
              />
              <label htmlFor="reminder-2" className="ml-2 block text-sm text-gray-700">
                Call client about estate planning
              </label>
            </div>
            <span className="text-xs text-gray-500">4:30 PM</span>
          </div>
        </div>
        <button className="mt-4 text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center">
          <Plus className="h-4 w-4 mr-1" />
          Add Reminder
        </button>
      </div>
    </div>
  );
};

export default CalendarSidebar;