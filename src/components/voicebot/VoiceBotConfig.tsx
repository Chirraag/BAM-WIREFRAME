import { Save, Plus, X } from 'lucide-react';

const VoiceBotConfig = () => {
  return (
    <div>
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Bot Configuration</h3>
        <div className="space-y-6">
          <div>
            <label htmlFor="bot-name" className="block text-sm font-medium text-gray-700 mb-1">Bot Name</label>
            <input
              type="text"
              id="bot-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
              defaultValue="Nova"
            />
          </div>
          
          <div>
            <label htmlFor="greeting" className="block text-sm font-medium text-gray-700 mb-1">Initial Greeting</label>
            <textarea
              id="greeting"
              rows={3}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
              defaultValue="Hello, thank you for calling LexiCounsel Law Firm. This is Nova, your virtual assistant. How may I help you today?"
            />
          </div>
          
          <div>
            <label htmlFor="intake-questions" className="block text-sm font-medium text-gray-700 mb-1">Client Intake Questions</label>
            <p className="text-xs text-gray-500 mb-3">These questions are asked to all callers before transferring to an attorney.</p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="bg-gray-100 w-6 h-6 flex items-center justify-center rounded-full text-xs font-medium text-gray-700 mr-2">1</span>
                <input
                  type="text"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                  defaultValue="May I have your full name, please?"
                />
                <button className="ml-2 text-gray-400 hover:text-gray-500">
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex items-center">
                <span className="bg-gray-100 w-6 h-6 flex items-center justify-center rounded-full text-xs font-medium text-gray-700 mr-2">2</span>
                <input
                  type="text"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                  defaultValue="What's the best phone number to reach you at?"
                />
                <button className="ml-2 text-gray-400 hover:text-gray-500">
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex items-center">
                <span className="bg-gray-100 w-6 h-6 flex items-center justify-center rounded-full text-xs font-medium text-gray-700 mr-2">3</span>
                <input
                  type="text"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                  defaultValue="How can we assist you today? Please briefly describe your legal matter."
                />
                <button className="ml-2 text-gray-400 hover:text-gray-500">
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                <Plus className="h-4 w-4 mr-1" />
                Add Question
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">Knowledge Base Topics</h4>
            <p className="text-xs text-gray-500 mb-3">The voice bot can answer questions about these topics.</p>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-md p-4">
                <div className="flex justify-between items-center mb-3">
                  <h5 className="text-sm font-medium text-gray-900">Family Law</h5>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-500">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                      defaultValue="Divorce in California is a no-fault process and typically takes at least 6 months."
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                      defaultValue="Child custody arrangements are determined based on the best interests of the child."
                    />
                  </div>
                  <button className="text-sm text-amber-600 hover:text-amber-700 flex items-center">
                    <Plus className="h-3 w-3 mr-1" />
                    Add Knowledge Item
                  </button>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-md p-4">
                <div className="flex justify-between items-center mb-3">
                  <h5 className="text-sm font-medium text-gray-900">Estate Planning</h5>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-500">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                      defaultValue="A will allows you to specify how your assets should be distributed after your death."
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                      defaultValue="A trust can help avoid probate and potentially reduce estate taxes."
                    />
                  </div>
                  <button className="text-sm text-amber-600 hover:text-amber-700 flex items-center">
                    <Plus className="h-3 w-3 mr-1" />
                    Add Knowledge Item
                  </button>
                </div>
              </div>
              
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                <Plus className="h-4 w-4 mr-1" />
                Add Topic
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 mr-3"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            <Save className="mr-2 h-4 w-4" />
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoiceBotConfig;