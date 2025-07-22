const StatsSection = ({ title, statsData }) => {
    const topRowStats = [
      { label: "Years of experience", value: `${statsData.experience}+` },
      { label: "Employees worldwide", value: statsData.employees },
      { label: "Markets where we do business", value: `${statsData.markets}+` },
    ]
  
    const bottomRowStats = [
      { label: "Largest asset manager globally", value: "1st" },
      { label: "Total investments managed", value: `$${(statsData.investments / 1000000).toFixed(1)}M` },
      { label: "Strategic partners worldwide", value: `${statsData.partners}+` },
    ]
  
    return (
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Top Row Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {topRowStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl md:text-7xl font-light text-blue-600 mb-4">{stat.value}</div>
                <p className="text-lg text-gray-700 leading-relaxed max-w-xs mx-auto">{stat.label}</p>
              </div>
            ))}
          </div>
  
          {/* Divider Line */}
          <div className="border-t border-gray-200 mb-16"></div>
  
          {/* Bottom Row Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {bottomRowStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl md:text-7xl font-light text-blue-600 mb-4">
                  {stat.value}
                  {stat.footnote && <sup className="text-2xl text-blue-600 ml-1">{stat.footnote}</sup>}
                </div>
                <p className="text-lg text-gray-700 leading-relaxed max-w-xs mx-auto">
                  {stat.label}
                  {stat.footnote && <sup className="text-sm text-gray-500 ml-1">{stat.footnote}</sup>}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default StatsSection
  