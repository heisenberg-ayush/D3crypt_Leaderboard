import './App.css';
import LeaderBoard from './pages/LeaderBoard';
import SideBar from './pages/components/Sidebar';

function App() {
  return (
    <div className="App-container">
      <SideBar />
      <LeaderBoard />
    </div>
  );
}

export default App;
