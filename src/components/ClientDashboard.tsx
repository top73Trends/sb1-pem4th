import React, { useEffect, useState } from 'react'
import { BarChart2, TrendingUp, Users, Globe, Share2, DollarSign, PieChart, Search, Activity, Calendar } from 'lucide-react'
import { getDashboardData } from '../services/api'
import Header from './Header'

const ClientDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    websiteTraffic: 0,
    socialEngagement: 0,
    conversionRate: 0,
    seoRanking: 0,
    adPerformance: 0,
    roi: 0,
    keywordRankings: [],
    competitorComparison: {},
    channelPerformance: {},
    upcomingReports: [],
    recentActivities: [],
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDashboardData('client')
        setDashboardData(data)
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1">
        <div className="w-64 bg-white shadow-md">
          <nav className="mt-4">
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
              <BarChart2 className="inline-block mr-2" /> Dashboard
            </a>
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
              <Globe className="inline-block mr-2" /> SEO
            </a>
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
              <Share2 className="inline-block mr-2" /> Social
            </a>
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
              <DollarSign className="inline-block mr-2" /> Advertising
            </a>
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
              <PieChart className="inline-block mr-2" /> Reports
            </a>
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
              <Calendar className="inline-block mr-2" /> Schedule
            </a>
          </nav>
        </div>

        <div className="flex-1 p-10">
          <h1 className="text-3xl font-bold mb-4">Client Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Website Traffic</h2>
              <p className="text-3xl font-bold">{dashboardData.websiteTraffic}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Social Engagement</h2>
              <p className="text-3xl font-bold">{dashboardData.socialEngagement}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Conversion Rate</h2>
              <p className="text-3xl font-bold">{dashboardData.conversionRate}%</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">SEO Ranking</h2>
              <p className="text-3xl font-bold">{dashboardData.seoRanking}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Ad Performance</h2>
              <p className="text-3xl font-bold">{dashboardData.adPerformance}%</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">ROI</h2>
              <p className="text-3xl font-bold">{dashboardData.roi}%</p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Top Keyword Rankings</h2>
              <ul>
                {dashboardData.keywordRankings.map((keyword, index) => (
                  <li key={index} className="mb-2">
                    <span className="font-medium">{keyword.term}:</span> Rank {keyword.rank}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Competitor Comparison</h2>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(dashboardData.competitorComparison).map(([competitor, score]) => (
                  <div key={competitor}>
                    <p className="font-semibold">{competitor}</p>
                    <p>Score: {score}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Upcoming Reports</h2>
              <ul>
                {dashboardData.upcomingReports.map((report, index) => (
                  <li key={index} className="mb-2">
                    <p className="font-medium">{report.title}</p>
                    <p className="text-sm text-gray-500">Due: {report.dueDate}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
              <ul>
                {dashboardData.recentActivities.map((activity, index) => (
                  <li key={index} className="mb-2">
                    <p className="font-medium">{activity.description}</p>
                    <p className="text-sm text-gray-500">{activity.date}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientDashboard