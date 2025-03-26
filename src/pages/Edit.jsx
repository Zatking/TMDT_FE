import React from 'react';
import EditForm from '../components/EditForm';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
  const navigate = useNavigate();

  // Mock data - replace with actual data from your API or state management
  const initialData = {
    name: 'John Doe',
    email: 'john@example.com',
    description: 'This is a sample description'
  };

  const handleSubmit = (formData) => {
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Add your API call or state update logic here
    navigate('/'); // Navigate back to home page after successful submission
  };

  const handleCancel = () => {
    navigate('/'); // Navigate back to home page when cancel is clicked
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <EditForm
          initialData={initialData}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
};

export default Edit; 