import { useCallback, useMemo } from "react";
import { Button, Card } from "react-bootstrap";
import genAlbumartUrl from "../../Util/genAlbumartUrl";

export default function ResultCard({ data }) {
  const imageURL = useMemo(() => genAlbumartUrl(data.artworkUrl100, "500x500"));

  const download = useCallback(() => {
    fetch(imageURL, {
      method: "GET",
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${data.collectionName}.jpg`);

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      });
  });

  return (
    <Card style={{ width: "17rem", marginTop: "1rem" }}>
      <Card.Img variant="top" src={imageURL} />

      <Card.Body>
        <Card.Title>{data.collectionName}</Card.Title>
        <Card.Subtitle>{data.artistName}</Card.Subtitle>
        <Card.Text />

        <Button variant="primary" onClick={download}>
          Download
        </Button>
      </Card.Body>
    </Card>
  );
}
