import CloseButton from "react-bootstrap/CloseButton";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesDown,
  faAnglesRight,
  faTableList
} from "@fortawesome/free-solid-svg-icons";

import FILE_NAMES from "../../data/fileNames";
import { closeTab, getPropTypes, openNewTab } from "../../utils";

function SideBar(Args) {
  const menuLinks = FILE_NAMES.map((fileName) => (
    <Row className="nav-item" key={fileName}>
      <Col>
        <a
          href={`/${fileName}`}
          className={
            fileName === Args.activeKey ? "nav-link active" : "nav-link"
          }
          onClick={(e) => {
            e.preventDefault();
            openNewTab(
              {
                title: fileName,
                entries: [],
              },
              Args.tabs,
              Args.setTabs,
              Args.setActiveKey,
              `SELECT * FROM \`${fileName}\``
            );
          }}
        >
          <FontAwesomeIcon
            icon={fileName === Args.activeKey ? faAnglesDown : faAnglesRight}
          />{" "}
          {fileName}
        </a>
      </Col>
    </Row>
  ));
  const openTabs = Args.tabs.map((tab) => (
    <Row className="nav-item align-items-center" key={tab.eventKey}>
      <Col xs={10}>
        <a
          href={`/${tab.title}`}
          className={
            tab.eventKey === Args.activeKey ? "nav-link active" : "nav-link"
          }
          onClick={(e) => {
            e.preventDefault();
            Args.setActiveKey(tab.eventKey);
          }}
        >
          <FontAwesomeIcon
            icon={
              tab.eventKey === Args.activeKey ? faAnglesDown : faAnglesRight
            }
          />{" "}
          <FontAwesomeIcon icon={faTableList} /> {tab.title}{" "}
        </a>
      </Col>
      <Col xs={2}>
        <CloseButton
          style={{
            fontSize: "0.5rem",
          }}
          onClick={(e) => {
            e.stopPropagation();
            const [newTabs, newActiveKey] = closeTab(tab.eventKey, Args.tabs);
            Args.setTabs(newTabs);
            Args.setActiveKey(newActiveKey);
          }}
        />
      </Col>
    </Row>
  ));

  return (
    <Container
      fluid
      style={{
        height: `${Args.mobile ? "100%" : "calc(100vh - 8rem)"}`,
      }}
      className="sidebar"
      id={`sidebar${Args.mobile ? "mobile" : ""}`}
    >
      <p className="text-secondary heading mt-3">
        <div>
          <FontAwesomeIcon icon={faTableList} />
          <span>  All Table</span>
        </div>
      </p>
      <Container fluid className="tableLinks">
        {menuLinks}
      </Container>
      <hr />
      <p className="text-secondary heading mt-3">Recent Tabs</p>
      <Container fluid className="tabLinks">
        {openTabs}
      </Container>
    </Container>
  );
}

SideBar.propTypes = getPropTypes(
  "activeKey",
  "tabs",
  "setTabs",
  "setActiveKey",
  "mobile"
);

export default SideBar;
