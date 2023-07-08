import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title }</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.LinkText}</Link>
        </li>
        
      </ul>
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" className="btn btn-danger" onClick={props.toggleRedMode} >red</button>
        <button type="button" className="btn btn-warning" onClick={props.toggleyellowMode}>yellow</button>
        <button type="button" className="btn btn-success" onClick={props.toggleGreenMode}>green</button>
      </div>
      <div className={`form-check form-switch mx-3 text-${props.mode === "light" ? "dark" : "light"}`}>
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable dark mode</label>
       </div>
    </div>
  </div>
  </nav>
  )
}

Navbar.propTypes = {
  title : PropTypes.string.isRequired, 
  LinkText : PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'stranger',
  LinkText: 'About'
}
