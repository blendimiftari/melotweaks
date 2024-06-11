import React from "react"
import "./sidebar.css"
import SidebarButton from "./sidebarButton"
import { MdFavorite } from "react-icons/md"
import { FaGripfire, FaPlay } from "react-icons/fa"
import { FaSignOutAlt } from "react-icons/fa"
import { IoLibrary } from "react-icons/io5"
import { MdSpaceDashboard } from "react-icons/md"

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <img
        src="https://i.pinimg.com/564x/97/43/ec/9743ecac80966a95e9d328c08b995c04.jpg"
        className="profile-img"
      ></img>
      <div>
        <SidebarButton title="Albums" to="/" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Tracks" to="/track" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  )
}
