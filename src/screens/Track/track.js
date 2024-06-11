import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './track.css'; // Import your CSS file

const Track = () => {
  const [trackData, setTrackData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://spotify23.p.rapidapi.com/tracks/',
          params: {
            ids: '4WNcduiCmDNfmTEz7JvmLv'
          },
          headers: {
            'x-rapidapi-key': 'c0af16912emsh522d7f660a0967ap1fc9a2jsnfe8b231a91cc',
            'x-rapidapi-host': 'spotify23.p.rapidapi.com'
          }
        };
        const response = await axios.request(options);
        setTrackData(response.data?.tracks); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!trackData || trackData.length === 0) {
    return <div className="track-card loading">Loading...</div>; 
  }

  const track = trackData[0];

  return (
    <div className="container">
      <div className="iphone neu">
        <div className="title">
          <div><i className="fas fa-chevron-left"></i></div>
          <div><i className="fas fa-ellipsis-v"></i></div>
        </div>
        <div className="album-cover">
          <div className="album-overlay"></div>
          <img src={track.album.images[0].url} alt="" />
          <h2 className="song-title">{track.name}</h2>
          <h3 className="artist-title">{track.artists[0].name}</h3>
        </div>
    
        <div className="">
          {trackData.map((track, index) => (
            <div key={index}>
              <p>Popularity: {track.popularity}</p>
              <p>
                External Link: <a href={track.external_urls.spotify}>Listen on Spotify</a>
              </p>
            </div>
          ))}
        </div>
    
        <audio controls className="audio-player">
          <source src={track.preview_url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default Track;
