import { useCallback, useState } from "react";
import axios from "axios";
import "./Home.css";
import Searchbar from "../../Components/Searchbar";
import Results from "../../Components/Results";
import { Alert, Button, Card } from "react-bootstrap";
import { useQuery, useQueryClient } from "react-query";
import useDebounce from "../../Hooks/useDebounce";
import useItunesSearch from "../../Hooks/useItunesSearch";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const debouncedInput = useDebounce(searchInput, 750);
  const [country, setCountry] = useState("nl");

  const queryClient = useQueryClient();

  const { data, isLoading } = useItunesSearch(debouncedInput, country);

  return (
    <>
      <div className="App">
        <Searchbar
          value={searchInput}
          setValue={setSearchInput}
          country={country}
          setCountry={setCountry}
        />

        <div className="results" style={{ paddingBottom: "5rem" }}>
          {!isLoading && !searchInput.trim().length && (
            <Alert variant="primary" className="alerts">
              Type something in the search bar to search!
            </Alert>
          )}

          {!isLoading && searchInput.trim().length > 1 && data?.length == 0 && (
            <Alert variant="warning" className="alerts">
              Nothing found
            </Alert>
          )}

          <Results results={data || []} loading={isLoading} />
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

export default Home;
