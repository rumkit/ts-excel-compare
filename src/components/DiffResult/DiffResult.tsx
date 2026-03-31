import React from "react";
import { HotTable } from "@handsontable/react";
import { renderDiff } from "../../utils/RenderDiffTable";

import "./DiffResult.scss";

interface DiffResultProps {
  hotTableComponentDiffResult: React.RefObject<any>;
}

const DiffResult = ({ hotTableComponentDiffResult }: DiffResultProps) => {
  const hotDiffResultSettings = {
    minRows: 10,
    minCols: 10,
    minSpareCols: 0,
    minSpareRows: 0,
    colHeaders: false,
    rowHeaders: false,
    contextMenu: false,
    readOnly: true,
    renderAllRows: true,
    licenseKey: "non-commercial-and-evaluation"
  };

  return (
    <div className="diff-result-wrapper">
      <h1 className="diff-title">Result:</h1>

      <HotTable
        ref={hotTableComponentDiffResult}
        id="tableresult"
        data={[[""]]}
        settings={hotDiffResultSettings}
        renderer={renderDiff}
        className="diff-table"
        stretchH="all"
      />
    </div>
  );
};

export default DiffResult;