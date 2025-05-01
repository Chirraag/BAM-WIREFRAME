import { useState } from 'react';
import VoiceBotControls from '../components/voicebot/VoiceBotControls';
import VoiceBotTranscript from '../components/voicebot/VoiceBotTranscript';

export type VoiceBotTab = 'transcript';

const VoiceBot = () => {
  const [activeTab] = useState<VoiceBotTab>('transcript');

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">BAM Voice Bot</h2>
            <p className="mt-1 text-sm text-gray-500">
              Automated outbound calling system
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-[calc(100vh-18rem)]">
        <div className="w-full lg:w-2/3 p-6 overflow-y-auto">
          <VoiceBotTranscript />
        </div>
        <div className="w-full lg:w-1/3 border-l border-gray-200 p-6 flex flex-col">
          <VoiceBotControls />
        </div>
      </div>
    </div>
  );
};

export default VoiceBot;