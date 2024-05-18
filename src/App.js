import { useState } from 'react';
import './App.css';
import { disableReactDevTools } from ‘@fvilers/disable-react-devtools’;
import CommunityList from './components/CommunityList';
import JoinCommunityForm from './components/JoinCommunityForm';

if (process.env.NODE_ENV === 'production') disableReactDevTools ()

function App() {
  const [users, setUsers] = useState([])

  return (
    <div className="App">
     <JoinCommunityForm setGlitterUsers={setUsers} />
     <CommunityList glitterUsers={users} setGlitterUsers={setUsers} title="🎖️ !!!___=== Glitterforce Community ===___!!! 🎖️" />
    </div>
  );
}

export default App;
