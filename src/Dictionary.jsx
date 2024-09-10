import React, { useState } from 'react';

const Dictionary = () => {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);
  const [searchTerm, setSearchTerm] = useState(" ");
  const [meaning, setMeaning] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setMeaning("Word not found in the dictionary.");
      return;
    }
    const filteredDictionary = dictionary.filter(item =>
      item.word.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredDictionary.length > 0) {
      setMeaning(filteredDictionary.map(item => (
        <div key={item.word}>
          {item.meaning}
        </div>
      )));
    } else {
      setMeaning("Word not found in the dictionary.");
    }
  };

  return (
    <>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button type="button" onClick={handleSearch}>Search</button>
      <h4>Definition:</h4>
      <div>{meaning}</div>
    </>
  );
};

export default Dictionary;
