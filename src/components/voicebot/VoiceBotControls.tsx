import { useState } from 'react';
import { Phone, PhoneOff, Headphones, Volume2, Settings } from 'lucide-react';

const VoiceBotControls = () => {
  const [isActive, setIsActive] = useState(false);
  const [volume, setVolume] = useState(80);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedAgent, setSelectedAgent] = useState('nova');

  const agents = [
    { id: 'nova', name: 'Nova (Female, Professional)' },
    { id: 'echo', name: 'Echo (Male, Friendly)' },
    { id: 'onyx', name: 'Onyx (Male, Authoritative)' },
    { id: 'shimmer', name: 'Shimmer (Female, Warm)' }
  ];

  const makeCall = () => {
    if (!phoneNumber.trim()) {
      alert('Please enter a phone number');
      return;
    }
    setIsActive(true);
    // Here you would integrate with your actual calling system
  };

  const endCall = () => {
    setIsActive(false);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1">
        <div className="p-4 bg-gray-50 rounded-lg mb-6">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Call Controls</h3>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="phone" className="block text-sm text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="agent" className="block text-sm text-gray-700 mb-1">Select Agent</label>
              <select
                id="agent"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                value={selectedAgent}
                onChange={(e) => setSelectedAgent(e.target.value)}
              >
                {agents.map(agent => (
                  <option key={agent.id} value={agent.id}>{agent.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="volume" className="flex justify-between text-sm text-gray-700 mb-1">
                <span>Volume</span>
                <span>{volume}%</span>
              </label>
              <div className="flex items-center">
                <Volume2 className="h-4 w-4 text-gray-400 mr-2" />
                <input
                  id="volume"
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(parseInt(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>
            </div>
          </div>
        </div>

        {isActive && (
          <div className="p-4 bg-green-50 rounded-lg border border-green-100 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-green-800">Active Call</h4>
                <p className="mt-1 text-xs text-green-600">
                  Connected to: {phoneNumber}
                </p>
              </div>
              <div className="animate-pulse">
                <span className="inline-block h-3 w-3 rounded-full bg-green-500"></span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div className="grid grid-cols-2 gap-3">
          {!isActive ? (
            <button
              onClick={makeCall}
              className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <Phone className="mr-2 h-4 w-4" />
              Make Call
            </button>
          ) : (
            <button
              onClick={endCall}
              className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <PhoneOff className="mr-2 h-4 w-4" />
              End Call
            </button>
          )}
          <button
            className="flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            <Headphones className="mr-2 h-4 w-4" />
            Test
          </button>
        </div>
        <button
          className="mt-3 w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-amber-700 hover:text-amber-800"
        >
          <Settings className="mr-2 h-4 w-4" />
          Advanced Settings
        </button>
      </div>
    </div>
  );
};

export default VoiceBotControls;