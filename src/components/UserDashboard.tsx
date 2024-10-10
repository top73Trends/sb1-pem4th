import React, { useEffect, useState } from 'react'
import { BarChart2, Calendar, MessageSquare, CheckSquare, Clock, Users } from 'lucide-react'
import { getDashboardData } from '../services/api'
import Header from './Header'

const UserDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    tasksCompleted: 0,
    upcomingDeadlines: 0,
    teamPerformance: 0,
    projectProgress: 0,
    hoursLogged: 0,
    teamCollaboration: 0,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDashboardData('user')
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
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md">
          <nav className="mt-4">
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
              <BarChart2 className="inline-block mr-2" /> Performance
            </a>
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
              <Calendar className="inline-block mr-2" /> Schedule
            </a>
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
              <MessageSquare className="inline-block mr-2" /> Messages
            </a>
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
              <Users className="inline-block mr-2" /> Team
            </a>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 p-10">
          <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Tasks Completed</h2>
              <p className="text-3xl font-bold">{dashboardData.tasksCompleted}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Upcoming Deadlines</h2>
              <p className="text-3xl font-bold">{dashboardData.upcomingDeadlines}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Team Performance</h2>
              <p className="text-3xl font-bold">{dashboardData.teamPerformance}%</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Project Progress</h2>
              <p className="text-3xl font-bold">{dashboardData.projectProgress}%</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Hours Logged</h2>
              <p className="text-3xl font-bold">{dashboardData.hoursLogged}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Team Collaboration</h2>
              <p className="text-3xl font-bold">{dashboardData.teamCollaboration}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard