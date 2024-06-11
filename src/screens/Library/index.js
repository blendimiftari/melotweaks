import React, { useState, useEffect } from "react";
import axios from "axios";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import "./library.css";
import AlbumDetail from "./album_detail";

const albumOptions = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/albums/',
  params: {
    ids: '3IBcauSj5M2A6lTeffJzdv' // You can add more album IDs as needed
  },
  headers: {
    'x-rapidapi-key': 'c0af16912emsh522d7f660a0967ap1fc9a2jsnfe8b231a91cc',
    'x-rapidapi-host': 'spotify23.p.rapidapi.com'
  }
};

export default function Library() {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const response = await axios.request(albumOptions);
        setAlbums(response.data.albums); // Assuming the response contains an array of albums
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchAlbums();
  }, []);

  const selectAlbum = (album) => {
    setSelectedAlbum(album);
  };

  const goBack = () => {
    setSelectedAlbum(null);
  };

  return (
    <div className="screen-container">
      {selectedAlbum ? (
        <AlbumDetail album={selectedAlbum} onBack={goBack} />
      ) : (
        <div className="library-body">
          {albums.map((album) => (
            <div
              className="playlist-card"
              key={album.id}
              onClick={() => selectAlbum(album)}
            >
              <img
                src={album.images[0].url}
                className="playlist-image"
                alt="Album-Art"
              />
              <p className="playlist-title">{album.name}</p>
              <p className="playlist-subtitle">{album.tracks.totalCount} Songs</p>
              <div className="playlist-fade">
                <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                  <AiFillPlayCircle />
                </IconContext.Provider>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
