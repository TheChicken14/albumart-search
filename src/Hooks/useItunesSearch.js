import axios from "axios";
import { useQuery } from "react-query";

/**
 * @param {String} term
 * @param {String} country
 */
export default function useItunesSearch(term, country) {
  const data = useQuery(
    ["searchresults", term, country],
    async () => {
      const { data } = await axios.get(`https://itunes.apple.com/search`, {
        params: {
          term: term,
          country: country,
          entity: "album",
        },
      });
      console.log(data);
      return data.results;
    },
    { enabled: term.trim().length != 0 }
  );

  return data;
}
