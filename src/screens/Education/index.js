import React from "react";

function Education() {
  return (
    <div>
      <section
        className="section"
        style={{ backgroundColor: "whitesmoke" }}
        id="edu"
      >
        <h2
          className="title is-2"
          style={{ textAlign: "center", marginBottom: "2cm" }}
        >
          <u>Education</u>
        </h2>
        <div className="columns">
          <div
            style={{
              fontSize: "30px",
              color: "black",
              fontWeight: 600,
              marginLeft: "3cm",
              marginRight: "1cm",
            }}
            className="column is-half"
          >
            Mahanama College Colombo 03
            <br />
            <br />
            <div style={{ fontSize: "17px", color: "black", fontWeight: 400 }}>
              My first school was Mahanama College Colombo 03. From 2007 to 2017
              I was in this amazing place. Not only the academics, I was doing
              so many extra-curricular activities as well.
            </div>
          </div>
          <div className="column">
            <img
              src="mahanama.jpg"
              style={{ borderRadius: "10%" }}
              width="70%"
              height="70%"
            />
          </div>
        </div>
      </section>
      <section className="section" style={{ backgroundColor: "whitesmoke" }}>
        <div className="columns">
          <div
            style={{
              fontSize: "30px",
              color: "black",
              fontWeight: 600,
              marginLeft: "3cm",
              marginRight: "1cm",
            }}
            className="column is-half"
          >
            Ananda College Colombo 10
            <br />
            <br />
            <div style={{ fontSize: "17px", color: "black", fontWeight: 400 }}>
              After I did my OLs I got selected to Ananda College Colombo 10. I
              did my ALs in physical science stream in 2020..
            </div>
          </div>
          <div className="column">
            <img
              src="ananda.jpg"
              style={{ borderRadius: "10%" }}
              width="70%"
              height="70%"
            />
          </div>
        </div>
      </section>
      <section className="section" style={{ backgroundColor: "whitesmoke" }}>
        <div className="columns">
          <div
            style={{
              fontSize: "30px",
              color: "black",
              fontWeight: 600,
              marginLeft: "3cm",
              marginRight: "1cm",
            }}
            className="column is-half"
          >
            University of Colombo School of Computing
            <br />
            <br />
            <div style={{ fontSize: "17px", color: "black", fontWeight: 400 }}>
              Getting selected to University of Colombo was one of the best
              things ever happend in my life. I got my Bsc in Information
              Systems from University of Colombo School of Comptuing.
            </div>
          </div>
          <div className="column">
            <img
              src="ucsc.jpg"
              style={{ borderRadius: "10%" }}
              width="70%"
              height="70%"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
