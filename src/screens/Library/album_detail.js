import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiFillPlayCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import "./library.css";

const trackOptions = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/album_tracks/',
    headers: {
      'x-rapidapi-key': 'c0af16912emsh522d7f660a0967ap1fc9a2jsnfe8b231a91cc',
      'x-rapidapi-host': 'spotify23.p.rapidapi.com'
    }
  };
  
  export default function AlbumDetail({ album, onBack }) {
    const [tracks, setTracks] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      async function fetchTracks() {
        try {
          const response = await axios.request({
            ...trackOptions,
            params: {
              id: album.id,
              offset: '0',
              limit: '300'
            }
          });
          console.log(response.data.data.album.tracks.items);
            setTracks(response.data.data.album.tracks.items);
        } catch (error) {
          setError('Failed to fetch tracks.');
          console.error(error);
        }
      }
      fetchTracks();
    }, [album.id]);
  
    if (error) {
      return <div className="error-message">{error}</div>;
    }
  
    return (
      <div className="album-detail-container">
        <button onClick={onBack} className="back-button">Back</button>
        <div className="album-info">
          <img src={album.images[0].url} alt={album.name} className="album-image" />
          <div className="album-text">
            <h2>{album.name}</h2>
            <p>{album.label}</p>
          </div>
        </div>
        <div className="tracks-list">
          {tracks.map(({ uid, track }) => (
            <div className="track-card" key={uid}>
              <p className="track-name">{track.name}</p>
              <p className="track-artist">{track.artists.items.map(artist => artist.profile.name).join(', ')}</p>
              <p className="track-duration">{(track.duration.totalMilliseconds / 60000).toFixed(2)} min</p>
              <IconContext.Provider value={{ size: "25px", color: "#E99D72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          ))}
        </div>
      </div>
    );
  }