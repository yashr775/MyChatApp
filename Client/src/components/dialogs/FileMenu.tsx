import { Menu } from "@mui/material";
import React from "react";

interface FileMenuPropTypes {
  anchorE1: HTMLButtonElement | null;
}

const FileMenu = ({ anchorE1 }: FileMenuPropTypes) => {
  return <Menu open anchorEl={anchorE1}></Menu>;
};

export default FileMenu;
