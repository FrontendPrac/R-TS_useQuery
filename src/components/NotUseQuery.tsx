import axios from "axios";
import React, { useEffect, useState } from "react";

const NotUseQuery = () => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData]: any = useState({});

  // 랜덤 강아지 사진 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const response = await axios("https://random.dog/woof.json");
        setData(response.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log("data: ", data);

  // 서버 상태 핸들링하기
  if (isError) return <h1> Error, try again! </h1>;
  if (isLoading) return <h1> Loading... </h1>;

  return (
    <div>
      <img src={data.url} alt="" />
    </div>
  );
};

export default NotUseQuery;
