import { useState, useEffect } from "react";
import axios from "axios";

const Giphy = (props) => {
  console.log(props);

  const [giphys, setGiphys] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.giphy.com/v1/gifs/trending?api_key=lNRRsrCmRNGi0Og6CDTmK4Ma2TdwkcFa&limit=25&rating=g"
      )
      .then((item) => setGiphys(item.data));
  }, []);
  return (
    <div>
      {giphys && (
        <div>
          <h2>{giphys.data[0].title}</h2>
          <img
            src={giphys.data[0].images.original.url}
            alt={giphys.data[0].title}
          />
        </div>
      )}
    </div>
  );
};

export default Giphy;
