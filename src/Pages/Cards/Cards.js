import React from "react";

const Cards = ({ data, handleFunction }) => {
  const { image, name, summary } = data.show;

  return (
    <div className="col-md-6">
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          <h4>{name}</h4>
        </div>
        <div className="card-body">
          <img
            src={image?.original}
            className="card-img-top mx-auto d-block "
            alt="Card"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
          <div className="mt-3">
            <p className="card-text">{summary.slice(3, 100) + "..."}</p>
            <button
              className="btn btn-primary"
              onClick={() => handleFunction(data?.show)}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
