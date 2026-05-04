import React, { useState } from "react";

function App() {
  const movieData = [
  { title: "Frozen", img: "/images/frozen.jpg" },
  { title: "Inception", img: "/images/inception.webp" },
  { title: "Jawan", img: "/images/jawan.webp" },
  { title: "KGF", img: "/images/kgf.jpg" },
];

  const [step, setStep] = useState(1);
  const [movie, setMovie] = useState({});
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [id, setId] = useState("");

  const selectMovie = (m) => {
    setMovie(m);
    setStep(2);
  };

  const bookNow = () => {
    setStep(3);
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const confirmBooking = (e) => {
    e.preventDefault();
    setId("MOVIE" + Math.floor(1000 + Math.random() * 9000));
    setStep(4);
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      {step === 1 && (
        <div>
          <h2>Available Movies</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "15px",
            }}
          >
            {movieData.map((m, index) => (
              <div key={index} onClick={() => selectMovie(m)}>
                <img
                  src={m.img}
                  alt={m.title}
                  style={{
                    width: "180px",
                    height: "260px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <h3>{m.title}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Movie Details</h2>
          <img
            src={movie.img}
            alt={movie.title}
            style={{
              width: "220px",
              height: "320px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <h3>{movie.title}</h3>
          <p>Click below to book your seat.</p>
          <button onClick={bookNow}>Book Seat</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Enter Your Details</h2>

          <form onSubmit={confirmBooking}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              onChange={handleChange}
            />
            <br /><br />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />
            <br /><br />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              required
              onChange={handleChange}
            />
            <br /><br />

            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2>Seat Booked</h2>
          <h3>Booking ID: {id}</h3>

          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Mobile: {user.mobile}</p>
          <p>Movie: {movie.title}</p>
        </div>
      )}
    </div>
  );
}

export default App;
