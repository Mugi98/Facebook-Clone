import React from 'react'
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import FeedPage from './FeedPage';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app-body">
            <Sidebar />  
            <FeedPage />
            <Widgets />
          </div>
        </>
      )}
      
    
      


    </div>
  );
}

export default App;
