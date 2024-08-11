import { useState } from 'react';

function App() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="bg-sky-900 h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold tracking-wider mb-4">Star Rating</h1>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => setRating(num)}
            onMouseEnter={() => setHover(num)}
            onMouseLeave={() => setHover(0)}
            className={`text-3xl p-1 ${
              num <= (hover || rating)
                ? 'text-yellow-500'  
                : 'text-gray-400' 
            }`}
          >
            &#9733; 
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
