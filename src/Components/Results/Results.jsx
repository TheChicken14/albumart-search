import { Col, Container, Row, Spinner } from "react-bootstrap";
import ResultCard from "./ResultCard";

export default function Results({ results, loading }) {
  return (
    <Container fluid="md" className="justify-content-center">
      {loading && (
        <Col sm={12}>
          <Spinner animation="border" style={{ margin: "5rem" }} />
        </Col>
      )}

      <Row>
        {results.map((r) => (
          <Col className="result" key={r.collectionId}>
            {/* <p>{r.collectionName}</p>
            <p>by {r.artistName}</p>
            <img src={r.artworkUrl100} /> */}
            <ResultCard data={r} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
