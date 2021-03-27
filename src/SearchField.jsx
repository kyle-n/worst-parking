import React, { useState } from 'react';
import ApiConnector from './ApiConnector';

const SearchField = () => {
  const [query, setQuery] = useState('');

  const onQueryChange = (e) => {
    setQuery(e.target.value);
    ApiConnector.searchWorstLots(e.target.value).then(body => console.log(body.business))
  }

  return (
    <input type="text"
    id="location-search"
    value={query}
    onChange={onQueryChange}
    />
  )
};

export default SearchField;
