import React, { ReactNode } from "react";
function Span(props: any) {
  return (
    <span>
      span: {props.name1}
      {props.name2}
    </span>
  );
}
