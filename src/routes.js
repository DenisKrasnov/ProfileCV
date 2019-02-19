import React from "react";
import Build from "@material-ui/icons/Build";
import AttachFile from "@material-ui/icons/AttachFile";
import Work from "@material-ui/icons/Work";

export const routes = [
  {
    to: "/skills",
    name: "Skills",
    Icon: <Build nativeColor="gray" />,
  },
  {
    to: "/cv",
    name: "CV",
    Icon: <AttachFile nativeColor="gray" />,
  },
  {
    to: "/portfolio",
    name: "Portfolio",
    Icon: <Work nativeColor="gray" />,
  },
];
