import React from "react";

function Hero() {
  return (
    <section
      className="section is-medium"
      style={{ backgroundColor: "black" }}
      id="home"
    >
      <div className="columns">
        <div
          style={{
            fontSize: "70px",
            color: "aliceblue",
            fontWeight: 700,
            marginLeft: "2.4cm",
          }}
          className="column is-half"
        >
          Nipul Yansith
          <br />
          <span
            style={{
              fontSize: "17px",
              color: "aliceblue",
              fontWeight: 500,
              marginLeft: "0.1cm",
            }}
          >
            A full stack developer with years of industrial experience
          </span>
          <div className="buttons are-small">
            <button
              className="button is-link is-light"
              style={{
                fontSize: "15px",
                backgroundColor: "rgb(93, 6, 93)",
                color: "aliceblue",
                textAlign: "center",
                paddingBottom: "30px",
                paddingTop: "30px",
                paddingLeft: "50px",
                paddingRight: "50px",
                borderRadius: "8px",
                boxShadow:
                  "0 8px 16px 0 rgba(101, 170, 62, 0.2), 0 6px 20px 0 rgba(35, 175, 17, 0.19)",
              }}
            >
              <a style={{ color: "aliceblue" }} href="#me">
                <b>Find out More &gt;</b>
              </a>
            </button>
          </div>
          <div
            style={{ scale: "0.4", marginLeft: "-7.34cm", marginTop: "-0.9cm" }}
          >
            <i className="fa-brands fa-whatsapp" />
            <i className="fa-brands fa-instagram" />
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-linkedin" />
          </div>
        </div>
        <div className="column">
          <figure className="image">
            <img
              className="is-rounded"
              src="abcd.jpg"
              style={{ scale: "0.9", marginTop: "-2cm" }}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
