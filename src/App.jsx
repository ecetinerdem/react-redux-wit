import './App.css';
import Header from './components/Header';
import Users from './components/Users';

function App() {
  return (
    <>
      <Header />
      <h1>Users</h1>
      <div className="card">
        <Users />
      </div>
    </>
  );
}

export default App;
