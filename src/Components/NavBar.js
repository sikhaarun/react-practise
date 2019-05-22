import React from 'react'
import {Link ,NavLink,withRouter} from 'react-router-dom';
//import Navbar from 'react-bootstrap-navbar'

const NavBar=(props)=>{

    return <nav className="navbar  navbar-expand-sm navbar-dark bg-primary mb-3 " >
    <div className="container">
    <Link className="navbar-brand" to="/">EMS</Link>
    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <Link className="nav-link btn" to="/Users">Users</Link>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link btn" to="/Posts">Posts</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link btn" to="/Login">Login</NavLink>
                  </li>
                  {/* <li className="nav-item">
                      <NavLink className="nav-link btn" to="/Login">Login</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link btn" to="/Posts">Posts</NavLink>
                  </li>
                  <li collapseassName="nav-item">
                      <NavLink className="nav-link btn" to="/Users">Users</NavLink>
                  </li>                   */}
              </ul>
            </div>
    </div>

    </nav>
//   return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className="mr-auto">
//       <Nav.Link href="#features">Features</Nav.Link>
//       <Nav.Link href="#pricing">Pricing</Nav.Link>
//       <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//     <Nav>
//       <Nav.Link href="#deets">More deets</Nav.Link>
//       <Nav.Link eventKey={2} href="#memes">
//         Dank memes
//       </Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>

}

export default withRouter(NavBar)