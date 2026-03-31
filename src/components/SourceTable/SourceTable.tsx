import React from "react";
import Handsontable from "handsontable";
import { HotTable } from "@handsontable/react";
import FileImport from "../FileImport/FileImport";
import { GridSettings } from "handsontable/settings";

import "./SourceTable.css";

interface SourceTableProps {
  header: string;
  sheetname: string;
  sheetlist: any;
  fileRef: React.RefObject<any>;
  sheetdata: any[][] | Handsontable.RowObject[];
  onFileSelectChange(e: React.ChangeEvent<HTMLInputElement>): any;
  onSheetSelectChange(e: string): any;
}

const SourceTable = (props: SourceTableProps) => {
  const hotSettings: GridSettings = {
    height: 300,
    stretchH: "all",
    autoColumnSize: true,
    colHeaders: true,
    rowHeaders: true,
    licenseKey: "non-commercial-and-evaluation"
  };

  return (
    <div className="source-table-wrapper">
      <h1 style={{ marginLeft: 3 }}>{props.header}</h1>

      <FileImport
        sheetname={props.sheetname}
        sheetlist={props.sheetlist}
        onFileSelectChange={props.onFileSelectChange}
        onSheetSelectChange={props.onSheetSelectChange}
        fileRef={props.fileRef}
      />

      <div className="hot-wrapper">
        <HotTable data={props.sheetdata} settings={hotSettings} />
      </div>
    </div>
  );
};

export default SourceTable;