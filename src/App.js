import React, { useState } from 'react';
import Button from './components/UI/Button';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false)

  const toggleParagraph = () => {
    setShowParagraph(prevShowParagraph => !prevShowParagraph)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is a new paragraph!</p>}
      <Button onClick={toggleParagraph}>show paragraph</Button>
    </div>
  );
}

export default App;
