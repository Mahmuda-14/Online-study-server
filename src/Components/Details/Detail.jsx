

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import SingleDetail from "./SingleDetail";
import axios from "axios";

const Detail = () => {
  const [detail, setDetail] = useState({});

  const { id } = useParams();

  const url = `https://online-study-server-cyan.vercel.app/task/${id}`;

  useEffect(() => {
    // Fetch the product details based on the _id
    axios.get(url, {withCredentials: true})
    .then(res => {
      setDetail(res.data)

    })
    // fetch(`https://online-study-server-cyan.vercel.app/task/${id}`)
    //   .then((response) => response.json())
    //   .then((data) => setDetail(data));
  }, [id]);




  return (
    <div>
      <div>
        <SingleDetail key={detail._id} detail={detail}></SingleDetail>
      </div>
    </div>
  );
};

export default Detail;











