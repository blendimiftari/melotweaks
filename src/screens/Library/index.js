import React, { useState, useEffect } from "react"
import axios from "axios"
import { IconContext } from "react-icons"
import { AiFillPlayCircle } from "react-icons/ai"
import "./library.css"
import { useNavigate } from "react-router-dom"

const options = {
  method: "GET",
  url: "https://spotify23.p.rapidapi.com/playlist/",
  params: {
    id: "37i9dQZF1DX4Wsb4d7NKfP",
  },
  headers: {
    "x-rapidapi-key": "27f75102c9msh9fb3ca70d0fb30dp1ffa97jsnb100c6ccaae7",
    "x-rapidapi-host": "spotify23.p.rapidapi.com",
  },
}

export default function Library() {
  const [playlists, setPlaylists] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.request(options)
        console.log("API response:", response.data)
        setPlaylists([response.data]) // Wrap the response in an array if it returns a single playlist
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  const navigate = useNavigate()

  const playPlaylist = id => {
    navigate("/player", { state: { id: id } })
  }

  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists?.map((playlist, index) => (
          <div
            className="playlist-card"
            key={playlist.id || index} // Ensure unique key prop
            onClick={() => playPlaylist(playlist.id)}
          >
            <img
              src={playlist.images[0].url}
              className="playlist-image"
              alt="Playlist-Art"
            />
            <p className="playlist-title">{playlist.name}</p>
            <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
