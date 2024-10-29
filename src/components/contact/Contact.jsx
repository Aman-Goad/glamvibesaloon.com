import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [result, setResult] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setResult("Sending....")
    const formDataToSend = new FormData()

    // Add form fields to FormData
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key])
    })

    formDataToSend.append("access_key", "8d85e3e0-738f-41bc-90df-398ec927394d")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      })

      const data = await response.json()

      if (data.success) {
        setResult("Message Sent Successfully")
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        console.log("Error", data)
        setResult(data.message)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setResult("Failed to send message. Please try again.")
    }
  }

  return (
    <div className='flex flex-col  pt-24 items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl w-full  flex flex-col md:flex-row gap-8 items-center'>
        <div className='w-full md:w-1/2'>
          <img 
            src="/images/appoint.jpg" 
            alt="Contact Us"
            className='w-full h-[70vh] object-cover rounded-lg shadow-lg'
          />
        </div>

        <div className='w-full md:w-1/2 space-y-12'>
          <div>
            <h1 className='text-[4vw] font-bold text-center text-custom-primary mb-8'>Contact Us</h1>
          </div>
          <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
            <div className='rounded-md shadow-sm space-y-4'>
              <div>
                <label htmlFor='name' className='sr-only'>Name</label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  required
                  className='appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-custom-primary focus:border-custom-primary focus:z-10'
                  placeholder='Your Name'
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor='email' className='sr-only'>Email</label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  className='appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-custom-primary focus:border-custom-primary focus:z-10'
                  placeholder='Email Address'
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor='phone' className='sr-only'>Phone</label>
                <input
                  id='phone'
                  name='phone'
                  type='tel'
                  required
                  className='appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-custom-primary focus:border-custom-primary focus:z-10'
                  placeholder='Phone Number'
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor='message' className='sr-only'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  required
                  rows='4'
                  className='appearance-none resize-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-custom-primary focus:border-custom-primary focus:z-10'
                  placeholder='Your Message'
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-custom-primary hover:bg-custom-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-primary transition duration-300'
              >
                Send Message
              </button>
            </div>
            <span className="block mt-4 text-center">{result}</span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
