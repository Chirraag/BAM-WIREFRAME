import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

type Page = 'dashboard' | 'calendar' | 'messaging' | 'voicebot' | 'clients' | 'cases' | 'settings';

interface DashboardLayoutProps {
  children: ReactNode;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const DashboardLayout = ({ children, currentPage, setCurrentPage }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen overflow-hidden">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header currentPage={currentPage} />
          <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;