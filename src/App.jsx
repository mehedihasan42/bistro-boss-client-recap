import React, { useState, useRef } from 'react';

function App() {
  const [data, setData] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Doe" },
    { id: 4, name: "Smith" },
  ]);

  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef();

  const handleSearch = () => {
    const searchTerm = searchInputRef.current.value.toLowerCase();
    const results = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  };

  return (
    <div>
      <input type="text" ref={searchInputRef} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
