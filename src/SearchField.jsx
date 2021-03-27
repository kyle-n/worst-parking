import React, { useState } from 'react';
import ApiConnector from './ApiConnector';

const SearchField = (props) => {
  const [query, setQuery] = useState('');

  const onQueryChange = (e) => {
    setQuery(e.target.value);
    // todo: debounce
    ApiConnector.searchWorstLots(e.target.value).then(props.setResponse);
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
