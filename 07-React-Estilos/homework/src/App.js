import React from 'react';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data from './data.js';

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <SearchBar
            onSearch={(ciudad) => alert(ciudad)}
          />
        </div>
        <hr />
      </div>
      <hr />
      <div>
        <Cards
          cities={data}
        />
      </div>
    </div>
  );
}

export default App;
