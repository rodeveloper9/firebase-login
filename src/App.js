import './App.css';
import { AuthProvider } from './contexts/authContext';
import Login from './components/signUp'

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <header className="App-header">
          <Login />
        </header>
      </div>
    </AuthProvider>
  );
}

export default App;
