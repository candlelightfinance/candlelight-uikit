import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#DEBC53" : "#DEBC53";
  return (
    <h1
      style={{
        fontFamily: "montserrat",
        textTransform: "uppercase",
        fontSize: "20pt",
        color: "#DEBC53",
      }}
    >
      Candlelight Finance
    </h1>
  );
};
export default Logo;

