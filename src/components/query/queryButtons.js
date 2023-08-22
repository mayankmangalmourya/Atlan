import {ButtonToolbar, ButtonGroup, Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faDownload,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

function QueryButtons() {
  const buttons = [
    {
      icon: faPlay,
      title: "Run Query",
    },
    {
      icon: faSave,
      title: "Save Query",
    },
    {
      icon: faDownload,
      title: "Export data as CSV",
    },
    {
      icon: faDownload,
      title: "Export data as JSON",
    },
  ].map(({ icon, title }, index) => (
    <Button
      size={"sm"}
      // variant={"outline-primary"}
      style={{
        borderLeft: 1,
        borderTop: "none",
        borderBottom: "none",
        borderRadius: 1,
        padding: "0.5rem",
        marginLeft: "0.3rem",
      }}
      className={"mr-2 query-button"}
      key={index}
    >
      <FontAwesomeIcon icon={icon} /> {title}
    </Button>
  ));
  return (
    <ButtonToolbar className="mb-3 mt-3">
      <ButtonGroup className="me-2"
        style={{
          position: "absolute",
          right: 50,
        }}
      >{buttons}</ButtonGroup>
    </ButtonToolbar>
  );
}

export default QueryButtons;
