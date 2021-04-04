import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <circle cx="400" cy="250" r="205" fill="#261855" />
      <circle cx="400" cy="250" r="145" fill="#43168d" />
      <circle cx="400" cy="250" r="85" fill="#7c5cb1" />
      <rect rx="25" style="x:330;y:320;width:145;height:220;fill:white;stroke:#181743;stroke-width:12;" />
      <rect rx="25" style="x:300;y:480;width:100;height:60;fill:white;stroke:#181743;stroke-width:12;" />
      <rect style='x:295;y:507;width:190;height:40;fill:#181743' />
      <path d='M400 312 L400 262' style='stroke: #181743; stroke-width: 12;stroke-linecap: round' />
      <path d='M400 210 L370 265 C370,280 380,290 400,290 C420,290 430,275 430,265 Z' style='fill:#ffcc01;filter="url(#darken)"; opacity: .8;'/>
    </Svg>
  );
};

export default Icon;
