import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


// Structural framework - https://react-bootstrap.github.io/components/navbar/
/**
 * 
 * @returns The navbar for my soccer blogging website
 */
export function WebsiteNavbar(): JSX.Element {
    return <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">
      <img
        src=".../public/dortlogo.svg"
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="Dortmund Logo"
        />{' '}
        <strong>All About Dortmund (from Delaware!)</strong>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#welcome">Welcome Blurb</Nav.Link>
        <Nav.Link href="#posts">Blog Posts</Nav.Link>
        <NavDropdown title="Dropdown (WIP)" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="https://en.wikipedia.org/wiki/Borussia_Dortmund" 
            target="_blank">Dortmund Wikipedia Page</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  
}