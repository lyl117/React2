import React, { ReactNode } from "react";
const Div = ({ children, name1 }: { name1: string, children?: ReactNode }) => {
  return (
    <div>
      div: {name1} <br />
      {children}
    </div>
  );
};
