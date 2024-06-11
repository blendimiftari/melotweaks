import React from "react"
import "./sidebarButton.css"
import { Link } from "react-router-dom"
import { IconContext } from "react-icons"
import { useLocation } from "react-router-dom"

export default function SidebarButton(props) {
  const location = useLocation()

  const isActive = location.pathname === props.to

  const btnClass = isActive ? "btn-body active" : "btn-body"

  return (
    <Link to={props.to}>
      <div className={btnClass}>
        <IconContext.Provider value={{ size: "22px", className: "btn-icon" }}>
          {props.icon}
        </IconContext.Provider>

        <p className="btn-title">{props.title}</p>
      </div>
    </Link>
  )
}
