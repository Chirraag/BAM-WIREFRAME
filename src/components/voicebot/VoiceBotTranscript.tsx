import { useState } from 'react';
import { Download, Copy, Clock, Phone } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  sender: 'bot' | 'recipient';
  timestamp: string;
};

const VoiceBotTranscript = () => {
  const [selectedCall, setSelectedCall] = useState<string>("today-1");
  
  const calls = [
    { id: "today-1", number: "(555) 123-4567", time: "10:15 AM", date: "Today", status: "Completed" },
    { id: "today-2", number: "(555) 987-6543", time: "9:30 AM", date: "Today", status: "No Answer" },
    { id: "yesterday-1", number: "(555) 555-1212", time: "3:45 PM", date: "Yesterday", status: "Completed" },
    { id: "yesterday-2", number: "(555) 444-3333", time: "11:20 AM", date: "Yesterday", status: "Voicemail" },
  ];

  // Mock transcript data for outbound calls
  const transcripts: Record<string, Message[]> = {
    "today-1": [
      { id: 1, sender: 'bot', text: "Hello, this is Nova from BAM Automations. I'm calling to confirm your appointment for tomorrow at 2 PM. Is this a good time to talk?", timestamp: "10:15:02 AM" },
      { id: 2, sender: 'recipient', text: "Yes, this is a good time.", timestamp: "10:15:10 AM" },
      { id: 3, sender: 'bot', text: "Great! I just wanted to confirm that you'll be attending the consultation tomorrow at 2 PM. Can you confirm this works for you?", timestamp: "10:15:15 AM" },
      { id: 4, sender: 'recipient', text: "Yes, that works for me.", timestamp: "10:15:19 AM" },
      { id: 5, sender: 'bot', text: "Excellent! The appointment is confirmed for tomorrow at 2 PM. You'll receive a confirmation email shortly. Is there anything else you need assistance with?", timestamp: "10:15:23 AM" },
      { id: 6, sender: 'recipient', text: "No, that's all. Thank you.", timestamp: "10:15:27 AM" },
      { id: 7, sender: 'bot', text: "You're welcome! Have a great day!", timestamp: "10:15:35 AM" },
    ],
  };
  
  const currentTranscript = transcripts[selectedCall] || [];

  const selectedCallData = calls.find(call => call.id === selectedCall);

  return (
    <div>
      <div className="mb-6">
        <label htmlFor="call-select" className="block text-sm font-medium text-gray-700 mb-1">Select Call</label>
        <select
          id="call-select"
          value={selectedCall}
          onChange={(e) => setSelectedCall(e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
        >
          {calls.map((call) => (
            <option key={call.id} value={call.id}>
              {call.number} - {call.date}, {call.time}
            </option>
          ))}
        </select>
      </div>

      {selectedCallData && (
        <div className="mb-6 bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-lg font-medium text-gray-900">{selectedCallData.number}</h4>
              <p className="text-sm text-gray-500">Status: {selectedCallData.status}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-900">{selectedCallData.date}</p>
              <p className="text-sm text-gray-500">{selectedCallData.time}</p>
            </div>
          </div>
          <div className="mt-4 flex space-x-3">
            <button className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900">
              <Download className="h-4 w-4 mr-1" />
              Download
            </button>
            <button className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900">
              <Copy className="h-4 w-4 mr-1" />
              Copy
            </button>
            <button className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900">
              <Phone className="h-4 w-4 mr-1" />
              Call Again
            </button>
          </div>
        </div>
      )}

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <h3 className="text-sm font-medium text-gray-500">Call Transcript</h3>
        </div>
        <div className="p-4 space-y-4 max-h-[calc(100vh-25rem)] overflow-y-auto">
          {currentTranscript.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[75%] px-4 py-2 rounded-lg ${
                message.sender === 'bot' 
                  ? 'bg-amber-100 text-amber-900'
                  : 'bg-gray-100 text-gray-900'
              }`}>
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-medium">
                    {message.sender === 'bot' ? 'BAM Agent (Nova)' : 'Recipient'}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock className="inline-block h-3 w-3 mr-1" />
                    {message.timestamp}
                  </span>
                </div>
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}
          
          {currentTranscript.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No transcript available for this call.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoiceBotTranscript;