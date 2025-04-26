import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

function Welcome({ user, onLogout }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-pink-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full transition-all duration-300 hover:shadow-2xl hover:scale-105">
        <FaUserCircle className="text-blue-500 mx-auto mb-4 drop-shadow-sm" size={90} />
        <h2 className="text-2xl font-extrabold text-gray-800 mb-2">Welcome!</h2>
        <p className="text-gray-500 mb-6 text-sm">{user}</p>
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition duration-300 shadow-sm hover:shadow-md"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Welcome
