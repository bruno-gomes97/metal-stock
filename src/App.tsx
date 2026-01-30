import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import DashboardPage from './pages/dashboard';
import LoginPage from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
