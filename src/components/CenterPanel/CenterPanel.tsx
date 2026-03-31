import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";

import "./CenterPanel.css";

interface CenterPanelProps {
  onDiffBtnClick: (e: React.MouseEvent<HTMLElement>) => void;
  onSampleBtnClick: (e: React.MouseEvent<HTMLElement>) => void;
  onResetBtnClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const CenterPanel = ({ 
  onDiffBtnClick, 
  onSampleBtnClick, 
  onResetBtnClick 
}: CenterPanelProps) => {
  return (
    <div className="buttons-wrapper">
      <Button type="dashed" size="small" onClick={onSampleBtnClick}>
        {"< Sample >"}
      </Button>

      <Button id="btn-diff" type="primary" size="large" onClick={onDiffBtnClick}>
        {">> Diff <<"}
      </Button>

      <Button id="btn-clean" type="default" onClick={onResetBtnClick}>
        {"<< Reset >>"}
      </Button>
    </div>
  );
};

export default CenterPanel;