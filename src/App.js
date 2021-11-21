import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/search" element={<h1>This is the search page</h1>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
