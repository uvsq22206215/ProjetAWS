import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';

function App() {
  const Main = () => <h1>Hello world</h1>;
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
