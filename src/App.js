import {useState} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState(0);
  function handleChange(e, step){
    setText(prevText => prevText + 1);
  }
  return (
    <div className="App">
      <p>{text}</p>
      <button onClick={handleChange}>Change</button>
    </div>
  );
}

export default App;
