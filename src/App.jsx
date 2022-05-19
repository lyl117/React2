import React, { ReactNode } from "react";
// 05/11 1회차 수업
// FC : function component의 약자, 타입스크립트 코드
// 자식에 대한 리액트 노드라는 타입을 정의하는 과정을 생략하게 해줌.
// import "./App.css";
// import "./DIv";
// import "./Span";
// // 이렇게 적어도 됨. Import Div from './DIv.tsx';

// //props: object
// // children에는 아무것도 없는데, 이것은 undefined다.
// // "?" 를 붙이게 되면 있을수도 있고, 없을수도 있다라는 뜻

// const Div = (props: any) => {
//   return (
//     <div>
//       {props.span1}
//       {props.name1}
//       {props.span2}
//     </div>
//   );
// };
// // const Div = ({ children, name1 }: { name1: string; children?: ReactNode }) => {
// //   return (
// //     <div>
// //       div: {name1} <br />
// //       {children}
// //     </div>
// //   );
// // };

// // function Span(props: any) {
// //   return (
// //     <span>
// //       span: {props.name1}
// //       {props.name2}
// //     </span>
// //   );
// // }

// function App() {
//   return (
//     <div className="App">
//       <Div name1="name1" Span1={"span1"} span2={"span2"} />
//     </div>
//   );
// }
// export default App;

//05/16 2회차 수업
// const arr = Array.from(Array(100), (_, i) => i + 1);
// // arr: 1 ~ 100까지의 수
// const App = () => {
//   return (
//     <div>
//       {arr.map((item) => {
//         // map함수 : 배열을 만들어주는 함수인데,
//         // array의 각각의 항목들을 순서대로 하나씩 돌리면서 작동을 하고
//         // return을 하나씩 해준다.
//         // item: 다른 이름으로 사용해도 되고, array안에 있는 첫번째 "Item"부터
//         // 마지막 item까지 하나씩 돌리면서 return
//         if (item % 7 === 0) {
//           // 7로 나눠서 나머지가 0인 경우
//           return;
//           <button type="button" key={item}>
//             7의 배수
//           </button>;
//         } else if (item % 10 === 0) {
//           // 10으로 나눠서 나머지가 0인 경우
//           return null;
//         } else {
//           // 그외
//           return (
//             <button type="button" key={item}>
//               {item}
//             </button>
//           );
//         }
//       })}
//     </div>
//   );
// };

// const App = () => {
//   const handleClickButton = () => {
//     alert("Hello World");
//   };
//   return (
//     <div>
//       <button
//         type="button"
//         onClick={() => {
//           alert("Hello World");
//         }}
//       >
//         click me !
//       </button>
//       <button type="button" onClick={handleClickButton}>
//         click me!
//       </button>
//     </div>
//   );
// };
//05/18 3회차 수업 = 계산하기
const App = () => {
  const [result, setResult] = React.useState(0);
  const [left, setLeft] = React.useState(0);
  const [right, setRight] = React.useState(0);
  //state를 3개 만듬 = rendering이 됨
  return (
    <>
      <input
        type="number"
        onChange={(e) => setLeft(parseInt(e.target.value, 10))}
      />
      +
      <input
        type="number"
        onChange={(e) => setRight(parseInt(e.target.value, 10))}
        // input값이 문자열이라, 숫자로 바꿔줌.
      />
      =
      <input type="number" disabled value={result} />
      <button onClick={() => setResult(right + left)}>계산</button>
      {/* 지정해준 값들을 더해서 result에 넘긴다. */}
    </>
  );
};
export default App;
