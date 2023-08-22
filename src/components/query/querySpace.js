import { Fragment } from "react";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/cobalt.css";
import { UnControlled as CodeMirror } from "react-codemirror2";

import { getPropTypes } from "../../utils";

function QuerySpace(props) {
  return (
    <Fragment>
      <CodeMirror
        value={props.defaultQuery}
        options={{
          mode: "sql",
          theme: "cobalt",
          lineNumbers: true,
        }}
      />
    </Fragment>
  );
}

QuerySpace.propTypes = getPropTypes("defaultQuery");

export default QuerySpace;
