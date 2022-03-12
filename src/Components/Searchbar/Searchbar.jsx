import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import itunesCountries from "../../Util/itunesCountries";

import "./Searchbar.css";

export default function Searchbar({ value, setValue, country, setCountry }) {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav>
              <Nav.Item className="nav-item">
                <Form.Control
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Search..."
                />
              </Nav.Item>

              <Nav.Item>
                <Form.Select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  {itunesCountries.map(([key, value]) => (
                    <option key={key} value={key}>
                      {value}
                    </option>
                  ))}
                </Form.Select>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
