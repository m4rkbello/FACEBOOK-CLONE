import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/login' exact element={<Login />} />
        <Route path='/register' exact element={<Register />} />
      </Routes>
    </Router>
  
    </div>
  );
}

export default App;
