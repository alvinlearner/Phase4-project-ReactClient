
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './DashSideNav.css';

function DashSideNav() {
  return (
    <div>
      
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" fixed={'top'}
    className={'position-sticky ps-0'}>
      <div className='logo-container'>
        <img src={logo} alt='Logo' />
      </div>
        <Container className='linkscontainer'>

          <Navbar.Brand href="#home" className='brand'>Admin Dashboard</Navbar.Brand>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
    
            <Nav.Link as={Link} to="/adminhome">
                Home
              </Nav.Link>
          

              <Nav.Link as={Link} to="/organisation">
                Event Organisation
              </Nav.Link>

              {/* Dropdown menu */}
          
              
            
              <NavDropdown title="Analytics" id="basic-nav-dropdown">
            
              <NavDropdown.Item as={Link} to="/analytics/statistics">
                   Statistics

                </NavDropdown.Item>
             
                <NavDropdown.Item as={Link} to="/analytics/graphs">
                  Graphs
                </NavDropdown.Item>
              
    
              </NavDropdown>
            </Nav>
          
          </Navbar.Collapse>
         

          <div className='returnbtn'>
            <Link to="/home">
                <button >Go to Home</button>
            </Link>
        </div>

        </Container>
      </Navbar>
      
    </div>
  );
}

export default DashSideNav;

// import React from 'react';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import logo from '../../assets/images/logo.png';
// import './DashSideNav.css';

// function DashSideNav() {
//   const location = useLocation();

//   return (
//     <div>
//       <Navbar bg="dark" variant="dark" expand="lg">
//         <Container>
//           <Navbar.Brand as={Link} to="/">
//             <img src={logo} alt="Logo" className="logo" />
//             Admin Dashboard
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mr-auto">
//               <Nav.Link as={NavLink} to="/adminhome" isActive={() => location.pathname === '/adminhome'}>
//                 Home
//               </Nav.Link>
//               <Nav.Link as={NavLink} to="/organisation" isActive={() => location.pathname === '/organisation'}>
//                 Event Organisation
//               </Nav.Link>
//               <NavDropdown title="Analytics" id="basic-nav-dropdown">
//                 <NavDropdown.Item as={NavLink} to="/analytics/statistics" isActive={() => location.pathname === '/analytics/statistics'}>
//                   Statistics
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={NavLink} to="/analytics/graphs" isActive={() => location.pathname === '/analytics/graphs'}>
//                   Graphs
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//             <div className="returnbtn">
//               <Link to="/home">
//                 <button>Go to Home</button>
//               </Link>
//             </div>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

// export default DashSideNav;

