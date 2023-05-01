const element = (
  <div className="bg-container">
    <p className="heading">Congratulations</p>
    <div className="card">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="name">Kiran V</h1>
      <p className="about">
        Vishnu institute of computer Education and Technology,
        <br /> Bhimavaram
      </p>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
