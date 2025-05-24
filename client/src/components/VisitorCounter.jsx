import { useEffect, useState } from 'react';
import { API } from '../api'; // API must be exported from api/index.js

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    API.get('/visitors')
      .then(res => setCount(res.data.count))
      .catch(console.error);

    const interval = setInterval(() => {
      API.get('/visitors')
        .then(res => setCount(res.data.count))
        .catch(console.error);
    }, 30000); // update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800/80 text-cyan-400 px-3 py-1 rounded-full text-sm font-mono backdrop-blur-sm">
      Visitors: {count.toLocaleString()}
    </div>
  );
};

export default VisitorCounter;
