import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

interface CalendarViewProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

const CalendarView = ({ selectedDate, setSelectedDate }: CalendarViewProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState<Date[]>([]);

  // Generate calendar days for the current month view
  useEffect(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    // First day of the month
    const firstDay = new Date(year, month, 1);
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);
    
    // Start from the previous Monday if the first day isn't Monday
    const daysToIncludeFromPrevMonth = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
    const startDate = new Date(year, month, 1 - daysToIncludeFromPrevMonth);
    
    // Include days until the next Sunday after the last day
    const daysToIncludeFromNextMonth = lastDay.getDay() === 0 ? 0 : 7 - lastDay.getDay();
    
    // Total days to show
    const totalDays = daysToIncludeFromPrevMonth + lastDay.getDate() + daysToIncludeFromNextMonth;
    
    // Generate array of dates
    const days: Date[] = [];
    for (let i = 0; i < totalDays; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      days.push(date);
    }
    
    setCalendarDays(days);
  }, [currentMonth]);

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const goToToday = () => {
    const today = new Date();
    setCurrentMonth(new Date(today.getFullYear(), today.getMonth(), 1));
    setSelectedDate(today);
  };

  const formatMonth = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };

  const isSelected = (date: Date) => {
    return date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear();
  };

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentMonth.getMonth();
  };

  // Mock events data
  const events = [
    {
      date: new Date(2025, 9, 15), // Oct 15, 2025
      title: 'Client Meeting - Johnson',
      type: 'meeting'
    },
    {
      date: new Date(2025, 9, 17), // Oct 17, 2025
      title: 'Court Hearing - Smith Case',
      type: 'court'
    },
    {
      date: new Date(2025, 9, 20), // Oct 20, 2025
      title: 'Document Review',
      type: 'task'
    },
    {
      date: new Date(2025, 9, 22), // Oct 22, 2025
      title: 'Team Briefing',
      type: 'meeting'
    },
    {
      date: new Date(2025, 9, 25), // Oct 25, 2025
      title: 'Deposition - Williams',
      type: 'deposition'
    }
  ];

  const getEventsForDate = (date: Date) => {
    return events.filter(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };

  return (
    <div className="h-full flex flex-col">
      <header className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">{formatMonth(currentMonth)}</h2>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={goToToday}
              className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              Today
            </button>
            <div className="flex">
              <button
                type="button"
                onClick={prevMonth}
                className="inline-flex items-center p-1.5 border border-gray-300 rounded-l-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={nextMonth}
                className="inline-flex items-center p-1.5 border border-gray-300 rounded-r-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 -ml-px"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <button
              type="button"
              className="inline-flex items-center px-3 py-1.5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              <Plus className="h-4 w-4 mr-1" />
              Event
            </button>
          </div>
        </div>
      </header>
      <div className="flex-1 overflow-auto">
        <div className="grid grid-cols-7 gap-px bg-gray-200">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
            <div key={day} className="bg-white py-2 text-center text-sm font-medium text-gray-500">
              {day}
            </div>
          ))}
          {calendarDays.map((date, i) => {
            const dayEvents = getEventsForDate(date);
            return (
              <div
                key={i}
                className={`min-h-[120px] bg-white p-2 ${!isCurrentMonth(date) ? 'bg-gray-50' : ''}`}
                onClick={() => setSelectedDate(date)}
              >
                <div className="flex justify-between">
                  <button
                    className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-sm font-semibold
                      ${isToday(date) ? 'bg-amber-600 text-white' : isSelected(date) ? 'bg-amber-100 text-amber-800' : 'text-gray-700'} 
                      ${!isCurrentMonth(date) ? 'text-gray-400' : ''}`}
                  >
                    {date.getDate()}
                  </button>
                </div>
                <div className="mt-2 space-y-1">
                  {dayEvents.map((event, eventIndex) => (
                    <div 
                      key={eventIndex}
                      className={`px-2 py-1 text-xs font-medium rounded truncate ${
                        event.type === 'meeting' ? 'bg-blue-100 text-blue-800' :
                        event.type === 'court' ? 'bg-red-100 text-red-800' :
                        event.type === 'deposition' ? 'bg-purple-100 text-purple-800' :
                        'bg-green-100 text-green-800'
                      }`}
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;