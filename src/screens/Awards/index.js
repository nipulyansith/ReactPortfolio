import React from "react";

function Awards() {
  return (
    <section
      className="section"
      style={{ backgroundColor: "whitesmoke" }}
      id="awar"
    >
      <h2
        className="title is-2"
        style={{ textAlign: "center", marginBottom: "2cm" }}
      >
        <u>Awards &amp; Certifications</u>
      </h2>
      <p style={{ fontSize: "17px", textAlign: "center" }}>
        Through out these years as a Software Developer I’ve achieved some
        awards &amp; certifications. These are some of them...
      </p>
      <div className="columns">
        <div className="column is-half">
          <br />
          <br />
          <br />
          <img
            src="CodeSprint-Main-Event-Banner-1024x576.jpg "
            style={{ marginLeft: "4.5cm", borderRadius: "10%" }}
            width="50%"
            height="50%"
          />
          <br />
          <br />
          <p style={{ fontSize: "17px", textAlign: "center" }}>
            Got 2nd place in the CODESPRINT <br />
            competition organized by IEEE in 2018{" "}
          </p>
          <br />
          <br />
          <img
            src="CodeCon2.0_Banner4_DeMoN-Kavindu-Perera-1024x576.jpg"
            style={{ marginLeft: "4.5cm", borderRadius: "10%" }}
            width="50%"
            height="50%"
          />
          <br />
          <br />
          <p style={{ fontSize: "17px", textAlign: "center" }}>
            Won the 1st place in CODECon 2.0 organized
            <br />
            by SLIIT in 2020
          </p>
          <br />
          <br />
        </div>
        <div className="column">
          <br />
          <br />
          <br />
          <img
            src="aces_coders_cover-1024x536.png"
            style={{ marginLeft: "4.5cm", borderRadius: "10%" }}
            width="50%"
            height="50%"
          />
          <br />
          <br />
          <p style={{ fontSize: "17px", textAlign: "center" }}>
            Got the 3rd place in Aces Coders V8.0
            <br />
            organized by UOP in 2019
          </p>
          <br />
          <br />
          <img
            src="coderally_header-1-1024x482.png"
            style={{ marginLeft: "4.5cm", borderRadius: "10%" }}
            width="50%"
            height="50%"
          />
          <br />
          <br />
          <p style={{ fontSize: "17px", textAlign: "center" }}>
            Won the 1st place in CODECon 2.0 organized
            <br />
            by SLIIT in 2020
          </p>
          <br />
          <br />
        </div>
      </div>
    </section>
  );
}

export default Awards;
