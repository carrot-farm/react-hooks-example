/*
  velopert가 만든 customHook
*/
import { useState, useEffect } from "react";

/*
  @params
    promiseCreator(promise): 프라미스를 생성.
    dept(arr/[]): 언제 프로미스를 만들지에 대한 배열.
      기본값은 비여있는 배열로써 컴포넌트가 랜더링 될때만 생성된다.
*/
export default function usePromise(promiseCreator, deps) {
  const [resolved, setResolved] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ===== 비동기 함수 진행
  const process = async () => {
    // 로딩 시장
    setLoading(true);
    try {
      const result = await promiseCreator();
      setResolved(result);
    } catch (e) {
      setError(e);
    }
    // 로딩 종료
    setLoading(false);
  };
  // =====
  useEffect(() => {
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return [loading, resolved, error];
}
