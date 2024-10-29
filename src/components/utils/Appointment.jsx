import React, { useState } from 'react'

const Appointment = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8d85e3e0-738f-41bc-90df-398ec927394d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Appointment Booked Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-6 sm:p-6 px-4 pt-4 bg-white mb-10 rounded-lg shadow-xl">
      <h1 className="sm:text-[4vw] text-[6vh] font-bold text-center pt-8 mb-20 leading-tight">Book an <span className='text-custom-primary'>Appointment</span></h1>

      <div className="flex sm:flex-row flex-col-reverse gap-4 sm:gap-0 items-center">
        <div className="sm:w-1/2 sm:pr-8 w-full">
          <h2 className="sm:text-3xl text-[4vh] font-bold mb-6">Fill in your details</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-bold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-primary focus:border-transparent"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-bold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-primary focus:border-transparent"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block mb-2 font-bold">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-primary focus:border-transparent"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="service" className="block mb-2 font-bold">Service</label>
              <select
                id="service"
                name="service"
                className="w-full px-3 py-2 border rounded-lg"
                required
              >
                <option value="">Select a service</option>
                <option value="facial" className='capitalize'>facial</option>
                <option value="bleach" className='capitalize'>bleach</option>
                <option value="clean up" className='capitalize'>clean up</option>
                <option value="face wax" className='capitalize'>face wax</option>
                <option value="normal wax" className='capitalize'>normal wax</option>
                <option value="rica wax" className='capitalize'>rica wax</option>
                <option value="full body work" className='capitalize'>full body work</option>
                <option value="hair treatment" className='capitalize'>hair treatment</option>
                <option value="hair cutting" className='capitalize'>hair cutting</option>
                <option value="pedicure manicure" className='capitalize'>pedicure manicure</option>
                <option value="face hair" className='capitalize'>face hair</option>
                
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
                    className="mr-2 accent-custom-primary"
                  />
                  Male
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="mr-2 accent-custom-primary"
                  />
                  Female
                </label>
              </div>
            </div>
            <button type="submit" className="w-full bg-custom-primary text-white py-2 px-4 rounded-lg hover:bg-custom-secondary transition duration-300">
              Book Appointment
            </button>
          </form>
          <span className="block mt-4 text-center">{result}</span>
        </div>
        <div className="sm:w-1/2 w-full">
          <img src="/images/appoint.jpg" alt="Saloon appointment" loading='lazy' className="w-full sm:h-[60vh] h-[40vh] rounded-lg shadow-lg object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Appointment
