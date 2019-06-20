import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/Featured';
import VenueInfo from './components/venueInfo';
import Highlight from './components/Highlights';
function App() {
  return (
    <div className="App" style={{ height: '1500px', background: 'green' }}>
      <Header />
      <Featured />
      <VenueInfo />
      <Highlight />
    </div>
  );
}

export default App;
