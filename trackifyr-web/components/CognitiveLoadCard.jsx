'use client'

export default function CognitiveLoadCard({ level, value, engagement }) {
  const getLevelConfig = (level) => {
    switch (level) {
      case 'Low':
        return {
          bg: 'bg-green-50',
          border: 'border-green-500',
          badge: 'bg-green-100 text-green-800 border-green-300',
          progress: 'bg-green-500',
        }
      case 'Medium':
        return {
          bg: 'bg-yellow-50',
          border: 'border-yellow-500',
          badge: 'bg-yellow-100 text-yellow-800 border-yellow-300',
          progress: 'bg-yellow-500',
        }
      case 'High':
        return {
          bg: 'bg-red-50',
          border: 'border-red-500',
          badge: 'bg-red-100 text-red-800 border-red-300',
          progress: 'bg-red-500',
        }
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-500',
          badge: 'bg-gray-100 text-gray-800 border-gray-300',
          progress: 'bg-gray-500',
        }
    }
  }

  const config = getLevelConfig(level)

  return (
    <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-l-4 ${config.border} p-6`}>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Current Cognitive Load</h3>
          <p className="text-sm text-gray-500 mt-0.5">Real-time monitoring</p>
        </div>
        <span className={`px-4 py-2 rounded-xl text-sm font-semibold border ${config.badge}`}>
          {level}
        </span>
      </div>
      
      <div className="space-y-5">
        <div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-gray-700">Load Level</span>
            <span className="text-3xl font-bold text-gray-900">{value}%</span>
          </div>
          <div className="relative w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className={`h-4 rounded-full ${config.progress} transition-all duration-1000`}
              style={{ width: `${value}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-gray-700">Engagement Level</span>
            <span className="text-2xl font-bold text-indigo-600">{engagement}%</span>
          </div>
          <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-indigo-500 to-blue-500 h-3 rounded-full transition-all duration-1000"
              style={{ width: `${engagement}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-gray-200 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Last updated: {new Date().toLocaleTimeString()}</span>
        </div>
        <div className="flex items-center space-x-1 text-xs text-green-600 font-medium">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
          <span>Live</span>
        </div>
      </div>
    </div>
  )
}



