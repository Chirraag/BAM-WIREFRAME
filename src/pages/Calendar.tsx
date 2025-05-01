import { useState } from 'react';
import CalendarView from '../components/calendar/CalendarView';
import CalendarSidebar from '../components/calendar/CalendarSidebar';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1 bg-white shadow rounded-lg overflow-hidden">
        <CalendarView selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </div>
      <div className="w-full lg:w-80">
        <CalendarSidebar selectedDate={selectedDate} />
      </div>
    </div>
  );
};

export default Calendar;