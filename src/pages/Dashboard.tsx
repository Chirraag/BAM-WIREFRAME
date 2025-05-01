import QuickStats from '../components/dashboard/QuickStats';
import RecentActivity from '../components/dashboard/RecentActivity';
import UpcomingAppointments from '../components/dashboard/UpcomingAppointments';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <QuickStats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <UpcomingAppointments />
      </div>
    </div>
  );
};

export default Dashboard;