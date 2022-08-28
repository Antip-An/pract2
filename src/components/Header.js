import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation, useNavigate  } from "react-router";


const Header = () => {
  const { pathname } = useLocation();

  return (
    <Navbar expand="sm">
      <Container>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/home" disabled={pathname === "/"}>
              Курсы
            </Nav.Link>
            <Nav.Link as={Link} to="/half" disabled={pathname === "/half"}>
              Полугодие
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;