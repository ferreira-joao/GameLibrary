import React from "react";

import { Spinner } from "./styles";

import { ImSpinner9 } from "react-icons/im";

interface ISpinner {
  size: number;
  color: string;
}

const LoadingSpinner: React.FC<ISpinner> = ({ size, color }) => {
  return (
    <Spinner>
      <ImSpinner9 className="icon" size={size} color={color} />
    </Spinner>
  );
};

export default LoadingSpinner;
