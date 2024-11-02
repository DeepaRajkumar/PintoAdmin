import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const PhoneOrderWithMap = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    email: '',
    doorNo: '',
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    pincode: '',
    landmark: '',
    label: 'Home'
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'customerName':
        return !value ? 'Customer name is required' : '';
      case 'phoneNumber':
        return !value ? 'Phone number is required' : 
               !/^\d{10}$/.test(value) ? 'Please enter a valid 10-digit phone number' : '';
      case 'email':
        return !value ? 'Email is required' :
               !/\S+@\S+\.\S+/.test(value) ? 'Please enter a valid email address' : '';
      case 'doorNo':
        return !value ? 'Door number is required' : '';
      case 'streetAddress1':
        return !value ? 'Street address is required' : '';
      case 'city':
        return !value ? 'City is required' : '';
      case 'pincode':
        return !value ? 'Pincode is required' :
               !/^\d{6}$/.test(value) ? 'Please enter a valid 6-digit pincode' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      newErrors[key] = validateField(key, formData[key]);
    });
    setErrors(newErrors);
    
    if (Object.values(newErrors).some(error => error)) {
      const newTouched = {};
      Object.keys(formData).forEach(key => {
        newTouched[key] = true;
      });
      setTouched(newTouched);
      return;
    }
    
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-6">
        {/* Form Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-6">Create Phone Order</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Customer Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Customer Name*
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full  border rounded-md ${
                    errors.customerName && touched.customerName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.customerName && touched.customerName && (
                  <p className="text-red-500 text-sm">{errors.customerName}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full  border rounded-md ${
                    errors.phoneNumber && touched.phoneNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full  border rounded-md ${
                    errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Door No*
                </label>
                <input
                  type="text"
                  name="doorNo"
                  value={formData.doorNo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full  border rounded-md ${
                    errors.doorNo && touched.doorNo ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.doorNo && touched.doorNo && (
                  <p className="text-red-500 text-sm">{errors.doorNo}</p>
                )}
              </div>
            {/* Address Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Street Address 1*
                </label>
                <input
                  type="text"
                  name="streetAddress1"
                  value={formData.streetAddress1}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full  border rounded-md ${
                    errors.streetAddress1 && touched.streetAddress1 ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.streetAddress1 && touched.streetAddress1 && (
                  <p className="text-red-500 text-sm">{errors.streetAddress1}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Street Address 2
                </label>
                <input
                  type="text"
                  name="streetAddress2"
                  value={formData.streetAddress2}
                  onChange={handleChange}
                  className="w-full  border rounded-md border-gray-300"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  City*
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full  border rounded-md ${
                    errors.city && touched.city ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.city && touched.city && (
                  <p className="text-red-500 text-sm">{errors.city}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Pincode*
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full  border rounded-md ${
                    errors.pincode && touched.pincode ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.pincode && touched.pincode && (
                  <p className="text-red-500 text-sm">{errors.pincode}</p>
                )}
              </div>
            </div>

            {/* Landmark and Label */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Landmark
              </label>
              <input
                type="text"
                name="landmark"
                value={formData.landmark}
                onChange={handleChange}
                className="w-full  border rounded-md border-gray-300"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Label
              </label>
              <select
                name="label"
                value={formData.label}
                onChange={handleChange}
                className="w-full  border rounded-md border-gray-300"
              >
                <option value="Home">Home</option>
                <option value="Work">Work</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    customerName: '',
                    phoneNumber: '',
                    email: '',
                    doorNo: '',
                    streetAddress1: '',
                    streetAddress2: '',
                    city: '',
                    pincode: '',
                    landmark: '',
                    label: 'Home'
                  });
                  setErrors({});
                  setTouched({});
                }}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Clear
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Next
              </button>
            </div>
          </form>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Pin Customer Location</h3>
          <div className="relative w-full h-64 bg-gray-100 rounded-lg mb-4">
            <img 
              src="/api/placeholder/400/320" 
              alt="Map placeholder" 
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Sample map pins */}
            <div className="absolute top-1/4 left-1/4">
              <MapPin className="text-red-500" size={24} />
            </div>
            <div className="absolute top-1/2 right-1/3">
              <MapPin className="text-red-500" size={24} />
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <p className="font-medium">Current Location:</p>
            <p>55 Building, 2nd Thukaram street,</p>
            <p>T.Nagar, Chennai.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneOrderWithMap;