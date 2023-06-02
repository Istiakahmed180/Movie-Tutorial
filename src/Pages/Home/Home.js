import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import RightSection from "../RigthSection/RightSection";

const Home = () => {
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleFunction = (movie) => {
    setMovie(movie);
  };

  return (
    <div className="d-flex flex-row">
      <div className="row">
        <div className="col-md-6">
          <div className="container">
            <div className="row g-3 my-5">
              {data?.map((datas, i) => (
                <Cards
                  key={i}
                  data={datas}
                  handleFunction={handleFunction}
                ></Cards>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <RightSection movie={movie}></RightSection>
        </div>
      </div>
    </div>
  );
};

export default Home;
