import { useCallback, useState } from "react";
import axios from "axios";
import "./App.css";
import Searchbar from "./Components/Searchbar";
import Results from "./Components/Results";
import { Alert, Button, Card } from "react-bootstrap";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [country, setCountry] = useState("nl");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const search = useCallback(() => {
    if (searchInput.trim().length == 0) return;

    setLoading(true);
    setResults([]);

    axios
      .get(`https://itunes.apple.com/search`, {
        params: {
          term: searchInput,
          country: country,
          entity: "album",
        },
      })
      .then((r) => {
        console.log(r);
        setResults(r.data.results);
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, [searchInput, country]);

  return (
    <>
      <div className="App">
        <Searchbar
          value={searchInput}
          setValue={setSearchInput}
          search={search}
          loading={loading}
          country={country}
          setCountry={setCountry}
        />

        <div className="results" style={{ paddingBottom: "5rem" }}>
          {results.length == 0 && (
            <Alert variant="primary">
              Type something in the search bar to search!
            </Alert>
          )}

          <Results results={results} loading={loading} />
        </div>
      </div>

      <footer
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: "green",
        }}
      >
        <Card>
          <Card.Footer>
            Made by Wisse
            <Button
              as="a"
              target="_window"
              href="https://github.com/TheChicken14/albumart-search"
              style={{ marginLeft: "1vh" }}
            >
              GitHub
            </Button>
          </Card.Footer>
        </Card>
      </footer>
    </>
  );
}

export default App;
