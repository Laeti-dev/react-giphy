import React, { useState } from 'react'; // use === Hook

import Gif from './Gif';
import GiftList from './GiftList';
import SearchBar from './SearchBar';

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

const App = () => {
  const [selectedID, setSelectID] = useState("gG6OcTSRWaSis");
  // whe setSelectedID will be call it will change the varaible selectedID ;
  // useState uses the original variable value
  // const selectedID = "gG6OcTSRWaSis";
  const [gifIDs, setGifIDs] = useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]);
  // const gifIDs = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];

  // giffy api
  const changeGifs = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      // console.log(res.data.map((gif) => gif.id));
      const gifs = res.data.map((gif) => gif.id);
      setGifIDs(gifs);
    });
  };

  const changeSelectedID = (newSelectedID) => {
    setSelectID(newSelectedID);
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar changeGifs={changeGifs} />
        <div className="selected-gif">
          <Gif gifID={selectedID} />
        </div>
      </div>
      <div className="right-scene">
        <GiftList gifIDs={gifIDs} changeSelectedID={changeSelectedID} />
      </div>
    </div>
  );
};

// A state = > make dynamics variable

export default App;
