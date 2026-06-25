import React, { useRef } from 'react';
function App() {

  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };
  
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Input" />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
}

export default App;