import React, { useState } from 'react';
import './App.css';
import SearchField from './SearchField';

const App = () => {
  const [response, setResponse] = useState({businesses: [], total: undefined})
  return (
    <main>
      <h1>Worst Parking Lots</h1>
      <SearchField setResponse={setResponse} />
      {response.businesses.map(business => {
        return (
          <p key={business.id}>{business.name}</p>
        );
      })}
    </main>
  )
}

export default App;
