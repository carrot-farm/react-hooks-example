/*
  InfoReducer의 반복되는 리듀서 처리
*/
import { useReducer } from "react";

// ==== 리듀서
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

export default function useInputs(initialForm) {
  // useReducer
  const [state, dispatch] = useReducer(reducer, initialForm);
  // 값변경 시 dispatch
  const onChange = e => {
    dispatch(e.target);
  };
  return [state, onChange];
}
