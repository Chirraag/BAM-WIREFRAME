import { 
  LayoutDashboard, 
  Calendar as CalendarIcon, 
  MessageSquare, 
  Phone, 
  Users,
  Scale
} from 'lucide-react';

type Page = 'dashboard' | 'calendar' | 'messaging' | 'voicebot' | 'clients';

interface SidebarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Sidebar = ({ currentPage, setCurrentPage }: SidebarProps) => {
  const navigation = [
    { name: 'Dashboard', icon: LayoutDashboard, page: 'dashboard' as const },
    { name: 'Calendar', icon: CalendarIcon, page: 'calendar' as const },
    { name: 'Messaging', icon: MessageSquare, page: 'messaging' as const },
    { name: 'Voice Bot', icon: Phone, page: 'voicebot' as const },
    { name: 'Clients', icon: Users, page: 'clients' as const },
  ];

  return (
    <div className="hidden md:flex md:flex-col md:w-64 bg-slate-800">
      <div className="flex flex-col h-full">
        <div className="flex items-center flex-shrink-0 px-4 py-5">
          <div className="flex items-center">
            <Scale className="h-8 w-8 text-amber-400" />
            <span className="ml-2 text-xl font-semibold text-white">BAM Automation</span>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col overflow-y-auto">
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => setCurrentPage(item.page)}
                className={`${
                  currentPage === item.page
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                } group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full transition-colors`}
              >
                <item.icon
                  className={`${
                    currentPage === item.page ? 'text-amber-400' : 'text-slate-400 group-hover:text-slate-300'
                  } mr-3 flex-shrink-0 h-5 w-5 transition-colors`}
                />
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;