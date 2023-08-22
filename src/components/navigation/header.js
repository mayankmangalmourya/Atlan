import {Navbar, Container, Button} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

import { getPropTypes, openNewTab } from "../../utils";
import { ReactComponent as AtlanLogo } from "../../logo.svg";

function Header(props) {
  return (
    <Navbar className="shadow p-3">
      <Container fluid>
        <Navbar.Brand href="#home">
          <AtlanLogo width={100} />
        </Navbar.Brand>
        <Navbar.Text>
          <Button
            variant={"outline-primary"}
            onClick={() => {
              openNewTab(
                {
                  title: `Query ${props.queryCount}`,
                  entries: [],
                },
                props.tabs,
                props.setTabs,
                props.setActiveKey
              );
              props.setQueryCount(props.queryCount + 1);
            }}
            style={{
              marginRight: "1rem",
            }}
          >
            New Query
          </Button>
          <Button
            variant={"outline-primary"}
            className="d-lg-none"
            onClick={() => {
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            aria-controls="sidebar"
            aria-expanded={props.sidebarOpen}
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

Header.propTypes = getPropTypes(
  "queryCount",
  "tabs",
  "setTabs",
  "setActiveKey",
  "setQueryCount",
  "setSidebarOpen",
  "sidebarOpen"
);

export default Header;
