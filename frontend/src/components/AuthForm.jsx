import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

function AuthForm({ isLogin, onToggle, onLogin }) {
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', phone: '', email: '', password: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setErrors({ ...errors, [name]: '' })
  }

  console.log(formData)
  const validate = () => {
    const newErrors = {}
    if (!formData.email) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email'
    console.log(formData.email)

    if (!formData.password) newErrors.password = 'Password is required'
    else if (!isLogin && formData.password.length < 6) newErrors.password = 'Min 6 characters'
    console.log(formData.password)

    if (!isLogin) {
      if (!formData.firstName) newErrors.firstName = 'First name required'
      if (!formData.lastName) newErrors.lastName = 'Last name required'
      if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid 10-digit phone required'
    }
    console.log(formData.phone)

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      if (isLogin) onLogin(formData.email)
      else {
        onToggle() // go to login
        setFormData({ firstName: '', lastName: '', phone: '', email: '', password: '' })
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-pink-100 p-4">
  <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-5 transition-all duration-300 hover:shadow-2xl">
    <h2 className="text-2xl font-extrabold text-center text-gray-800">
      {isLogin ? 'Login' : 'Sign Up'}
    </h2>

    {!isLogin && (
      <>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </>
    )}

    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Email"
      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500"
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

    <button
      type="submit"
      className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
    >
      {isLogin ? 'Login' : 'Sign Up'}
    </button>

    <p className="text-center text-sm mt-2 text-gray-600">
      {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
      <button
        type="button"
        onClick={onToggle}
        className="text-blue-600 hover:underline font-medium"
      >
        {isLogin ? 'Sign Up' : 'Login'}
      </button>
    </p>
  </form>
</div>

  )
}

export default AuthForm
