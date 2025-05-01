import { Clock, MapPin, User } from 'lucide-react';

const UpcomingAppointments = () => {
  const appointments = [
    {
      id: 1,
      title: 'Client Consultation',
      client: 'John Smith',
      time: 'Today, 2:00 PM',
      location: 'Office - Conference Room A',
      status: 'confirmed',
    },
    {
      id: 2,
      title: 'Deposition Prep',
      client: 'Williams Family',
      time: 'Today, 4:30 PM',
      location: 'Virtual Meeting',
      status: 'pending',
    },
    {
      id: 3,
      title: 'Contract Review',
      client: 'Thompson Tech Inc.',
      time: 'Tomorrow, 10:00 AM',
      location: "Office - Partner's Room",
      status: 'confirmed',
    },
    {
      id: 4,
      title: 'Settlement Discussion',
      client: 'Robert Johnson',
      time: 'Tomorrow, 3:00 PM',
      location: 'Courthouse',
      status: 'confirmed',
    },
  ];

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="p-5 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Upcoming Appointments</h3>
          <button className="text-sm font-medium text-amber-600 hover:text-amber-500">View calendar</button>
        </div>
      </div>
      <ul className="divide-y divide-gray-200">
        {appointments.map((appointment) => (
          <li key={appointment.id} className="p-5 hover:bg-gray-50 transition-colors duration-150 ease-in-out">
            <div className="flex justify-between">
              <div className="flex-1">
                <div className="flex items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{appointment.title}</p>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <User className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                      {appointment.client}
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    {appointment.time}
                  </div>
                  <div className="mt-1 flex items-center text-sm text-gray-500">
                    <MapPin className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    {appointment.location}
                  </div>
                </div>
              </div>
              <div className="ml-4 flex-shrink-0 flex items-start">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    appointment.status === 'confirmed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {appointment.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <div className="text-sm">
          <button className="font-medium text-amber-600 hover:text-amber-500">Schedule New Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointments;