import axios from "axios";
import { Alert } from "react-bootstrap";
import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";

export default function AlbumView() {
  const { id } = useParams();

  const queryClient = useQueryClient();

  const { data } = useQuery(["albumdata", id], async () => {
    const { data } = await axios.get(
      `https://itunes.apple.com/lookup?id=${id}&entity=album`
    );
    console.log(data);
    return data;
  });

  return (
    <div>
      <Alert>hello</Alert>
    </div>
  );
}
