import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#E8A172" : "#BE5230";
  return (
    <h1
      style={{
        fontFamily: "futura",
        textTransform: "uppercase",
        fontSize: "20pt",
        color: "#E8A172",
      }}
    >
      CandlelightFinance
    </h1>
  );
};
export default Logo;

