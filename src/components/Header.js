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
            <Nav.Link as={Link} to="/courses" disabled={pathname === "/courses"}>Создать курс</Nav.Link>
            <Nav.Link as={Link} to="/users" disabled={pathname === "/users"}>Создать пользователя</Nav.Link>
            <Nav.Link as={Link} to="/cathedra" disabled={pathname === "/cathedra"}>Создать кафедру</Nav.Link>
            <Nav.Link as={Link} to="/listeners" disabled={pathname === "/listener"}>Создать категорию слушателей</Nav.Link>
            <Nav.Link as={Link} to="/utprp" disabled={pathname === "/utprp"}>Создать УТП и РП</Nav.Link>
            <Nav.Link as={Link} to="/forms" disabled={pathname === "/forms"}>Создать форму проведения</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;