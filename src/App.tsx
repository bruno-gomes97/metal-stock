import { AuthProvider } from './context/authContext';
import LoginPage from './pages/login';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex items-center justify-center p-4">
        <LoginPage />
      </div>
    </AuthProvider>
  );
}

export default App;
