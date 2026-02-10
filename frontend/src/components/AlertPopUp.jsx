import React, { useState } from 'react';

const CustomAlert = ({ handleExplore }) => {
  const [show, setShow] = useState(false);

  return (
    
    <div className="p-4">
      <button
         className="mt-7 px-6 py-3 bg-purple-800 text-white rounded-xl hover:bg-purple-600 transition duration-300"
        onClick={() => handleExplore()}
      >
        Search
      </button>

      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-black p-6 rounded shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-2">Missing / Invalid Input</h2>
            <p>Please fill in the missing fields</p>
            <button
              className="mt-4 bg-purple-600 text-white px-4 py-2 rounded"
              onClick={() => setShow(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomAlert;