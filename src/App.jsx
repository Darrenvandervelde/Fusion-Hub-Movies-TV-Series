import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-background">
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App