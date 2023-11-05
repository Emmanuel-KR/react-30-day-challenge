
import './App.css';
import Header from './components/Header';
import Job from './components/Job';
import Planets from './components/Planets';
import User from './components/User';

function App() {
  
  return (
    <div className="App">
      <Header/>
      
      <Planets/>

      <User name="Emmanuel" age={26} email="emmanuel@email.com" />
      <Job company = 'Safaricom' position = 'Developer' salary = '250,000' />
    </div>
  );
}

export default App;
