import React from "react";
import { Select } from "antd";
import { ExcelHelper } from "../../utils/ExcelHelper";

import "./FileImport.css";

interface FileImportProps {
  sheetname: string;
  sheetlist: React.ReactNode;
  fileRef: React.RefObject<HTMLInputElement>;
  onFileSelectChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSheetSelectChange: (sheet: string) => void;
}

const FileImport = ({
  sheetname,
  sheetlist,
  fileRef,
  onFileSelectChange,
  onSheetSelectChange
}: FileImportProps) => {
  return (
    <div className="file-import">
      <input
        className="file-input"
        type="file"
        accept={ExcelHelper.SheetJSFT()}
        aria-label="Select original file"
        onChange={onFileSelectChange}
        ref={fileRef}
      />

      <Select
        className="sheet-select"
        value={sheetname}
        onChange={onSheetSelectChange}
      >
        {sheetlist}
      </Select>
    </div>
  );
};

export default FileImport;