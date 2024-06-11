import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Library from "../Library/index"
import Feed from "../Feed/Feed"
import Trending from "../Trending/Trending"
import Player from "../Player/Player"
import Favorites from "../Favorites/Favorites"
import Sidebar from "../../components/sidebar"

import "./home.css"

export default function Home() {
  return (
    <Router>
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  )
}
