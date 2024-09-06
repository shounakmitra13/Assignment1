import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [images, setImages] = useState(['assignment.jfif', 'assignment.jfif', 'assignment.jfif']);

  const addImage = (event) => {
    const newImage = URL.createObjectURL(event.target.files[0]);
    setImages([...images, newImage]);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row">
        {/* Left half - Empty */}
        <div className="w-full lg:w-1/3 hidden lg:block"></div>

        {/* Right half - Content */}
        <div className="w-full lg:w-2/3">
          {/* Container for the sections */}
          <div className="bg-gray-800 p-6 rounded-3xl relative">
            {/* Tabs Section */}
            <div className="bg-black p-2 rounded-3xl mb-4">
              <div className="flex justify-around mb-2">
                <button
                  className={`py-2 px-14 rounded-full ${activeTab === 'about' ? 'bg-gray-600' : 'bg-black'}`}
                  onClick={() => setActiveTab('about')}
                >
                  About Me
                </button>
                <button
                  className={`py-2 px-14 rounded-full ${activeTab === 'experiences' ? 'bg-gray-600' : 'bg-black'}`}
                  onClick={() => setActiveTab('experiences')}
                >
                  Experiences
                </button>
                <button
                  className={`py-2 px-14 rounded-full ${activeTab === 'recommended' ? 'bg-gray-600' : 'bg-black'}`}
                  onClick={() => setActiveTab('recommended')}
                >
                  Recommended
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className="mb-6 p-4 bg-gray-700 rounded-3xl relative flex items-start lg:items-center lg:justify-start">
              {activeTab === 'about' && (
                <div className="relative flex items-start lg:items-center lg:space-x-4">
                  {/* Position the image to the left of the text */}
                  <img src="/design.jpeg" alt="Design" className="hidden lg:block w-20 h-20" />
                  <div className="mb-6 p-4 bg-gray-700 rounded-3xl custom-scrollbar">
  <img src="/question.jpg" alt="Question Mark" className="absolute top-[-2rem] left-[-2rem] w-5 h-5" />
  <p className="mb-2 pr-8">
    Hello! I'm Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
  </p>
  <p>
    I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a...
  </p>
</div>

                </div>
              )}
              {activeTab === 'experiences' && (
                <div>
                  <p className="mb-2">Experience content here...</p>
                </div>
              )}
              {activeTab === 'recommended' && (
                <div>
                  <p className="mb-2">Recommended content here...</p>
                </div>
              )}
            </div>
           
            {/* Thick HR Line */}
            <div className="my-6">
              <hr className="hr-thick" />
            </div>

            {/* Gallery Section */}
            <div className="p-6 bg-gray-700 rounded-3xl relative">
              <div className="flex items-center justify-between mb-4">
                {/* Gallery title */}
                <h2 className="text-lg bg-black text-white py-1 px-2 rounded-full relative">
                  <img src="/question.jpg" alt="Question Mark" className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 w-5 h-5" />
                  Gallery
                </h2>

                {/* Add Image and Arrows */}
                <div className="flex items-center space-x-4">
                  <label className="py-1 px-4 bg-gray-500 rounded-full cursor-pointer">
                    + Add Image
                    <input type="file" className="hidden" onChange={addImage} />
                  </label>
                  <button className="bg-black text-gray-500 w-30 h-8 flex items-center rounded-full p-1">
                    <img src="/Arrows.jpeg" alt="Arrows" className="w-20 h-8" />
                  </button>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="flex space-x-4 overflow-x-auto relative">
                <img src="/design.jpeg" alt="Design" className="absolute top-4 left-[-2rem] w-20 h-20 hidden lg:block" />
                {images.map((src, index) => (
                  <div key={index} className="relative">
                    <img src={src} alt={`Placeholder ${index}`} className="w-48 h-48 object-cover rounded-3xl" />
                  </div>
                ))}
                {/* Single question mark in gallery section */}
                <img src="/question.jpg" alt="Question Mark" className="absolute top-[-2rem] right-[-2rem] w-5 h-5" />
              </div>

              {/* Thicker HR below gallery */}
              <div className="my-6">
                <hr className="hr-thicker" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
