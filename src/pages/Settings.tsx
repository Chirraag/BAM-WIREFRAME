import { useState } from 'react';
import { User, Lock, Bell, Globe, Database, Users } from 'lucide-react';

type SettingsTab = 'profile' | 'security' | 'notifications' | 'integrations' | 'data' | 'team';

const Settings = () => {
  const [activeTab, setActiveTab] = useState<SettingsTab>('profile');

  const tabs = [
    { id: 'profile' as SettingsTab, name: 'Profile', icon: User },
    { id: 'security' as SettingsTab, name: 'Security', icon: Lock },
    { id: 'notifications' as SettingsTab, name: 'Notifications', icon: Bell },
    { id: 'integrations' as SettingsTab, name: 'Integrations', icon: Globe },
    { id: 'data' as SettingsTab, name: 'Data Management', icon: Database },
    { id: 'team' as SettingsTab, name: 'Team', icon: Users },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/3">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex flex-col items-center">
                    <img
                      className="h-32 w-32 rounded-full"
                      src="https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Profile"
                    />
                    <h3 className="mt-4 text-lg font-medium text-gray-900">Sarah Johnson</h3>
                    <p className="text-sm text-gray-500">Partner</p>
                    <button className="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                      Change Avatar
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Personal Information</h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          First name
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                          defaultValue="Sarah"
                        />
                      </div>
                      <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                          defaultValue="Johnson"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                        defaultValue="sarah.johnson@lexicounsel.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                        defaultValue="(555) 987-6543"
                      />
                    </div>
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                        Position
                      </label>
                      <input
                        type="text"
                        name="position"
                        id="position"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                        defaultValue="Partner"
                      />
                    </div>
                    <div>
                      <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                        Bio
                      </label>
                      <textarea
                        id="bio"
                        name="bio"
                        rows={3}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                        defaultValue="Sarah is a partner specializing in corporate law with over 15 years of experience in mergers and acquisitions, securities law, and corporate governance."
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 mr-3"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'security':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Security Settings</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-4">Change Password</h4>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                      Current Password
                    </label>
                    <input
                      type="password"
                      name="current-password"
                      id="current-password"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                      New Password
                    </label>
                    <input
                      type="password"
                      name="new-password"
                      id="new-password"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      name="confirm-password"
                      id="confirm-password"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                    >
                      Update Password
                    </button>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-sm font-medium text-gray-700 mb-4">Two-Factor Authentication</h4>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Add an extra layer of security to your account.</p>
                    <p className="mt-1 text-sm text-green-600">Currently enabled</p>
                  </div>
                  <button
                    type="button"
                    className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                  >
                    Configure
                  </button>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-sm font-medium text-gray-700 mb-4">Sessions</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Current Session</p>
                      <p className="text-xs text-gray-500">San Francisco, CA • 192.168.1.1 • Chrome on macOS</p>
                      <p className="mt-1 text-xs text-green-600">Active now</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Mobile Device</p>
                      <p className="text-xs text-gray-500">Los Angeles, CA • 192.168.1.2 • LexiCounsel iOS App</p>
                      <p className="mt-1 text-xs text-gray-500">Last active: 2 hours ago</p>
                    </div>
                    <button
                      type="button"
                      className="text-sm text-red-600 hover:text-red-500"
                    >
                      Revoke
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'notifications':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Notification Settings</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-4">Email Notifications</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="email-new-case"
                        name="email-new-case"
                        type="checkbox"
                        className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                        defaultChecked
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="email-new-case" className="font-medium text-gray-700">
                        New case assignments
                      </label>
                      <p className="text-gray-500">Get notified when you're assigned to a new case.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="email-case-updates"
                        name="email-case-updates"
                        type="checkbox"
                        className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                        defaultChecked
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="email-case-updates" className="font-medium text-gray-700">
                        Case updates
                      </label>
                      <p className="text-gray-500">Receive updates when there are changes to your cases.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="email-calendar"
                        name="email-calendar"
                        type="checkbox"
                        className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                        defaultChecked
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="email-calendar" className="font-medium text-gray-700">
                        Calendar events
                      </label>
                      <p className="text-gray-500">Get notified about upcoming appointments and deadlines.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="email-messages"
                        name="email-messages"
                        type="checkbox"
                        className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                        defaultChecked
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="email-messages" className="font-medium text-gray-700">
                        New messages
                      </label>
                      <p className="text-gray-500">Receive an email when you get a new WhatsApp, SMS, or email message.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-sm font-medium text-gray-700 mb-4">Push Notifications</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="push-all"
                        name="push-all"
                        type="checkbox"
                        className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                        defaultChecked
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="push-all" className="font-medium text-gray-700">
                        Enable push notifications
                      </label>
                      <p className="text-gray-500">Receive push notifications on your devices.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-sm font-medium text-gray-700 mb-4">SMS Notifications</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="sms-calendar"
                        name="sms-calendar"
                        type="checkbox"
                        className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="sms-calendar" className="font-medium text-gray-700">
                        Calendar reminders
                      </label>
                      <p className="text-gray-500">Get SMS reminders for upcoming appointments.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="sms-urgent"
                        name="sms-urgent"
                        type="checkbox"
                        className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                        defaultChecked
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="sms-urgent" className="font-medium text-gray-700">
                        Urgent notices
                      </label>
                      <p className="text-gray-500">Receive SMS for urgent case updates or deadline changes.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 mr-3"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Settings</h3>
            <p className="text-gray-500">This section is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-64">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Settings</h2>
          </div>
          <ul className="divide-y divide-gray-200">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full px-4 py-3 flex items-center text-sm font-medium ${
                    activeTab === tab.id
                      ? 'bg-amber-50 text-amber-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <tab.icon className={`mr-3 h-5 w-5 ${
                    activeTab === tab.id ? 'text-amber-500' : 'text-gray-400'
                  }`} />
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Settings;