import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#CEB14E" : "#CEB14E";
  return (
    <h1
      style={{
        fontFamily: "montserrat",
        textTransform: "uppercase",
        fontSize: "20pt",
        color: "#CEB14E",
      }}
    >
      Candlelight Finance
    </h1>
  );
};
export default Logo;

