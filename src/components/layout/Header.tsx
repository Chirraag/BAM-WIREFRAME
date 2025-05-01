import { useState } from 'react';
import { Bell, Search, Menu } from 'lucide-react';

type Page = 'dashboard' | 'calendar' | 'messaging' | 'voicebot' | 'clients' | 'cases' | 'settings';

interface HeaderProps {
  currentPage: Page;
}

const Header = ({ currentPage }: HeaderProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const getPageTitle = (page: Page): string => {
    switch (page) {
      case 'dashboard':
        return 'Dashboard';
      case 'calendar':
        return 'Calendar';
      case 'messaging':
        return 'Messaging';
      case 'voicebot':
        return 'Voice Bot';
      case 'clients':
        return 'Clients';
      case 'cases':
        return 'Cases';
      case 'settings':
        return 'Settings';
      default:
        return 'Dashboard';
    }
  };

  return (
    <header className="bg-white shadow-sm z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex flex-1">
            <button
              className="md:hidden -ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <span className="sr-only">Open sidebar</span>
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex-1 flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-900">{getPageTitle(currentPage)}</h1>
              <div className="flex items-center ml-4">
                <div className="max-w-lg w-full lg:max-w-xs hidden md:block">
                  <label htmlFor="search" className="sr-only">Search</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
                <button className="ml-4 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                  <span className="sr-only">View notifications</span>
                  <Bell className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on state */}
      {showMobileMenu && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {/* Mobile navigation items would go here */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;