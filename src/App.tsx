import React, { ReactNode } from "react";
// FC : function component의 약자, 타입스크립트 코드
// 자식에 대한 리액트 노드라는 타입을 정의하는 과정을 생략하게 해줌.
import "./App.css";
import "./DIv";
import "./Span";
// 이렇게 적어도 됨. Import Div from './DIv.tsx';

//props: object
// children에는 아무것도 없는데, 이것은 undefined다.
// "?" 를 붙이게 되면 있을수도 있고, 없을수도 있다라는 뜻

const Div = (props: any) => {
  return (
    <div>
      {props.span1}
      {props.name1}
      {props.span2}
    </div>
  );
};
// const Div = ({ children, name1 }: { name1: string; children?: ReactNode }) => {
//   return (
//     <div>
//       div: {name1} <br />
//       {children}
//     </div>
//   );
// };

// function Span(props: any) {
//   return (
//     <span>
//       span: {props.name1}
//       {props.name2}
//     </span>
//   );
// }

function App() {
  return (
    <div className="App">
      <Div name1="name1" Span1={"span1"} span2={"span2"} />
    </div>
  );
}
export default App;
