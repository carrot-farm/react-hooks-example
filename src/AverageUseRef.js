/*
  등록 버튼 클릭시 input에 포커스 이동
*/
import React, { useState, useMemo, useCallback, useRef } from "react";

// ===== 평균값을 구하는 함수
const getAverage = numbers => {
  console.log("평균값 계산중...");
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null); // input 과 연결할 변수

  // ===== number 변경 / 컴포넌트가 처음 랜더링 될 때만 함수 생성
  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);
  // ===== 값을 list에  추가 / list, number 변경되었을 경우만 함수 생성
  const onInsert = useCallback(
    e => {
      const nextList = list.concat(parseInt(number, 10));
      setList(nextList);
      setNumber("");
      // 포커싱 이동
      inputEl.current.focus();
    },
    [list, number]
  );
  // ===== input 값 변경시 마다 getAverage가 호출되지 않고 list 변경시에만 호출된다.
  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균 값:</b>
        {avg}
      </div>
    </div>
  );
};

export default Average;
