import { useCallback, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);

  const search = useCallback(() => {
    axios
      .get(`https://itunes.apple.com/search`, {
        params: {
          term: searchInput,
          country: "nl",
          entity: "album",
        },
      })
      .then((r) => {
        console.log(r);
        setResults(r.data.results);
      })
      .catch((e) => console.error(e));
  }, [searchInput]);

  return (
    <div className="App">
      <div className="inputs App-header">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            search();
          }}
        >
          <input
            name="Search query"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <button type="submit">Search</button>
        </form>
      </div>
      <div className="results">
        {results.map((r) => (
          <div className="result" key={r.collectionId}>
            <p>{r.collectionName}</p>
            <p>by {r.artistName}</p>
            <img src={r.artworkUrl100} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
