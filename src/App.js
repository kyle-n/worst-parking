import React, { useState } from 'react';
import './App.css';
import SearchField from './SearchField';
import BusinessResult from './BusinessResult';

const App = () => {
  const [response, setResponse] = useState({businesses: [], total: undefined})
  return (
    <main>
      <h1>Worst Parking Lots</h1>
      <SearchField setResponse={setResponse} />
      {response.businesses.map(business => {
        return (
          <BusinessResult key={business.id} business={business} />
        );
      })}
    </main>
  )
}

export default App;
