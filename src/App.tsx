import { useState } from 'react';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Messaging from './pages/Messaging';
import VoiceBot from './pages/VoiceBot';
import Clients from './pages/Clients';

type Page = 'dashboard' | 'calendar' | 'messaging' | 'voicebot' | 'clients';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'calendar':
        return <Calendar />;
      case 'messaging':
        return <Messaging />;
      case 'voicebot':
        return <VoiceBot />;
      case 'clients':
        return <Clients />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <DashboardLayout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderPage()}
    </DashboardLayout>
  );
}

export default App;