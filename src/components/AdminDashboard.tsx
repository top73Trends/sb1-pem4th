import React, { useEffect, useState } from 'react'
import { Users, BarChart, Settings, Briefcase, DollarSign, TrendingUp, PieChart, Activity, Globe, Plus } from 'lucide-react'
import { getDashboardData } from '../services/api'
import Header from './Header'

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalUsers: 0,
    activeCampaigns: 0,
    revenue: 0,
    clientGrowth: 0,
    averageProjectValue: 0,
    teamProductivity: 0,
    topPerformingChannels: [],
    clientRetentionRate: 0,
    globalMarketPresence: 0,
    recentReports: [],
    upcomingTasks: [],
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDashboardData('admin')
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
              <Users className="inline-block mr-2" /> Clients
            </a>
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
              <BarChart className="inline-block mr-2" /> Analytics
            </a>
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
              <Briefcase className="inline-block mr-2" /> Projects
            </a>
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
              <PieChart className="inline-block mr-2" /> Reports
            </a>
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
              <Activity className="inline-block mr-2" /> Integrations
            </a>
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
              <Settings className="inline-block mr-2" /> Settings
            </a>
          </nav>
        </div>

        <div className="flex-1 p-10">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <Plus className="mr-2" /> Add New Client
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Total Clients</h2>
              <p className="text-3xl font-bold">{dashboardData.totalUsers}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Active Campaigns</h2>
              <p className="text-3xl font-bold">{dashboardData.activeCampaigns}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Total Revenue</h2>
              <p className="text-3xl font-bold">${dashboardData.revenue}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Client Growth</h2>
              <p className="text-3xl font-bold">{dashboardData.clientGrowth}%</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Avg. Project Value</h2>
              <p className="text-3xl font-bold">${dashboardData.averageProjectValue}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Team Productivity</h2>
              <p className="text-3xl font-bold">{dashboardData.teamProductivity}%</p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Recent Reports</h2>
              <ul>
                {dashboardData.recentReports.map((report, index) => (
                  <li key={index} className="mb-2">
                    <a href="#" className="text-blue-500 hover:underline">{report.title}</a>
                    <p className="text-sm text-gray-500">{report.date}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Upcoming Tasks</h2>
              <ul>
                {dashboardData.upcomingTasks.map((task, index) => (
                  <li key={index} className="mb-2">
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
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

export default AdminDashboard