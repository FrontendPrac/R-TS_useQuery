import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const UseQuery = () => {
  // 랜덤 강아지 사진 데이터 가져오기, 서버 상태 가져오기
  const { data, error, isLoading }: any = useQuery("dogs", () =>
    axios("https://random.dog/woof.json")
  );

  console.log("data: ", data);

  if (error) return <h1> {error.message}, try again! </h1>;
  if (isLoading) return <h1> Loading... </h1>;

  return (
    <div>
      <img src={data.data.url} alt="" />
    </div>
  );
};

export default UseQuery;
