import React from "react";
import usePromise from "./usePromise";

// ===== 3초후 실행되는 코드
const wait = () => {
  return new Promise(resolve =>
    setTimeout(() => resolve("Hello Hoosk!"), 3000)
  );
};

const UsePromiseSample = () => {
  const [loading, resolved, error] = usePromise(wait, []);
  // 로딩처리
  if (loading) {
    return <div>로딩중!</div>;
  }
  // 에러 처리
  if (error) {
    return <div>에러발생!</div>;
  }
  // 초기값일 때 랜더링 안함.
  if (!resolved) {
    return null;
  }

  return <div>{resolved}</div>;
};

export default UsePromiseSample;
