import QueryButtons from "../query/queryButtons";
import Row from "react-bootstrap/Row";
import QuerySpace from "../query/querySpace";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ResultsTable from "../table/resultsTable";
import ColumnsTable from "../table/columnsTable";
import { Fragment } from "react";
import useFile from "../../hooks/useFile";

function TabPane({ tab }) {
  const { result, isLoaded, error, timeOfRequest } = useFile(tab.title);
  return (
    <Fragment>
      <Row
        style={{
          width: "100%",
          height: "25vh",
          marginTop: "1rem",
        }}
      >
        <QuerySpace defaultQuery={tab.defaultQuery} />
      </Row>
      <QueryButtons />
      <hr />
      <Tabs defaultActiveKey="results" className="mb-3">
        <Tab eventKey="results" title="Results">
          <ResultsTable
            result={result}
            isLoaded={isLoaded}
            error={error}
            tab={tab}
            timeOfRequest={timeOfRequest}
          />
        </Tab>
        <Tab eventKey="columns" title="Columns">
          <ColumnsTable
            result={result}
            isLoaded={isLoaded}
            error={error}
            tab={tab}
          />
        </Tab>
      </Tabs>
    </Fragment>
  );
}

export default TabPane;
