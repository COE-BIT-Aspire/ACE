import React, { useState, useEffect } from 'react';

function MyComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component did mount/update');

    // Cleanup function for unmounting
    return () => {
      console.log('Component will unmount');
    };
  }, [count]); // Dependency array

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default MyComponent;
