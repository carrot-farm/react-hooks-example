import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // // ===== 처음 마운트 될 때만 실행
  // useEffect(() => {
  //   console.log("마운트 될 때만 실행됩니다.");
  // }, []);

  // // ===== 랜더링 될때마다 실행
  // useEffect(() => {
  //   console.log("렌더링이 완료 되었습니다.");
  //   console.log({
  //     name,
  //     nickname
  //   });
  // });

  // // ===== 특정값이 변경될때만 실행
  // useEffect(() => {
  //   console.log(name, "변경시만 호출");
  // }, [name]);

  // ===== 값이 변경직전 실행
  // useEffect(() => {
  //   console.log("변경 후", name);
  //   return () => {
  //           console.log("변경 전", name);
  //   };
  // });

  // ===== unmount 시에만 실행
  // useEffect(() => {
  //   console.log("값", name);
  //   return () => {
  //     console.log("unmount", name);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // ===== name 셋팅
  const onChangeName = e => {
    setName(e.target.value);
  };

  // ===== nickname 셋팅
  const onChangenickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangenickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
