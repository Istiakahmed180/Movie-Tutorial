import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const RightSection = ({ movie }) => {
  const [show, setShow] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  console.log(movie);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    image,
    genres,
    language,
    network,
    rating,
    schedule,
    status,
    premiered,
    summary,
    id,
  } = movie;

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = userInfo.name;
    const email = userInfo.email;
    const phone = userInfo.phone;
    const address = userInfo.address;
    const movieName = movie?.name;
    const movieRating = rating?.average;
    const movieStatus = status;
    const movieLanguage = language;
    const movieCountry = network?.name;
    const moviePremired = premiered;
    const movieSchedulel = schedule?.days;

    const userData = {
      name,
      email,
      phone,
      address,
      movieName,
      movieRating,
      movieStatus,
      movieLanguage,
      movieCountry,
      moviePremired,
      movieSchedulel,
    };

    // save userData in localStorage
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  return (
    <div style={{ marginTop: "66px" }} className="sticky-top mb-5">
      <div className="row justify-content-center align-items-center mb-4">
        <div className="col-md-6">
          <img src={image?.original} className="w-100 rounded" alt="" />
        </div>
        <div className="col-md-6">
          <h2>{movie?.name}</h2>
          <div className="d-flex flex-wrap gap-2">
            {genres?.length ? <strong>Genres: </strong> : null}
            {genres?.map((g, i) => (
              <p key={i}>{g}</p>
            ))}
          </div>
          {language && (
            <p>
              <strong>Language: </strong>
              {language}
            </p>
          )}
          {network && (
            <p>
              <strong>Country: </strong>
              {network?.name}
            </p>
          )}
          {rating && (
            <p>
              <strong>Rating: </strong>
              {rating?.average}
            </p>
          )}
          {schedule && (
            <p>
              <strong>Schedule: </strong>
              {schedule.days.map((day, i) => (
                <span key={i}>
                  {day}
                  {i !== schedule?.days.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          )}
          {status && (
            <p>
              <strong>Status: </strong>
              {status}
            </p>
          )}
          {schedule && (
            <p>
              <strong>Time: </strong>
              {schedule?.time}
            </p>
          )}
          {premiered && (
            <p>
              <strong>Premiered: </strong>
              {premiered}
            </p>
          )}
          {movie?.id && (
            <div className="text-center mt-4">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleShow}
              >
                Booking
              </button>
            </div>
          )}
        </div>
      </div>

      {/* modal button */}

      {summary && (
        <p>
          <strong>Summary: </strong>
          {summary}
        </p>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{movie?.name}</Modal.Title>
        </Modal.Header>
        <img
          src={image?.medium}
          className=" mx-auto d-block "
          alt="Card"
          style={{ width: "200px", height: "200px", objectFit: "cover" }}
        />
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="pt-2 pb-2"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label> Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter name"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group
              className="pt-2 pb-2"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group
              className="pt-2 pb-2"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label> Phone Number</Form.Label>
              <Form.Control
                name="phone"
                type="Number"
                placeholder="Enter phone number"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, phone: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group
              className="pt-2 pb-2"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Address</Form.Label>
              <Form.Control
                name="address"
                type="text"
                placeholder="Enter address"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, address: e.target.value })
                }
              />
            </Form.Group>

            <Button type="submit" variant="primary" onClick={handleClose}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default RightSection;
