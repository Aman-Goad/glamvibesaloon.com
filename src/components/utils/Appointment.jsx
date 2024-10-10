import React, { useState } from 'react'

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    service: '',
    gender: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
      <div className="w-1/2 pr-8">
        <h2 className="text-3xl font-bold mb-6">Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-bold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block mb-2 font-bold">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="service" className="block mb-2 font-bold">Service</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            >
              <option value="">Select a service</option>
              <option value="haircut">Haircut</option>
              <option value="coloring">Coloring</option>
              <option value="styling">Styling</option>
              <option value="makeup">Makeup</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold">Gender</label>
            <div>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Male
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Female
              </label>
            </div>
          </div>
          <button type="submit" className="w-full bg-custom-primary text-white py-2 px-4 rounded-lg hover:bg-custom-secondary transition duration-300">
            Book Appointment
          </button>
        </form>
      </div>
      <div className="w-1/2">
        <img src="/images/appoint.jpg" alt="Salon appointment" className="w-full h-[60vh] rounded-lg shadow-lg object-cover" />
      </div>
    </div>
  )
}

export default Appointment
