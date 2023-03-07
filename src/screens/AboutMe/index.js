import React from "react";

function AboutMe() {
  return (
    <section
      id="me"
      className="section is-medium"
      style={{ backgroundColor: "black" }}
    >
      <div className="columns">
        <div
          style={{ fontSize: "40px", color: "aliceblue", fontWeight: 700 }}
          className="column is-half"
        >
          <u>About Me</u>
          <br />
          <br />
          <div
            style={{
              fontSize: "17px",
              color: "aliceblue",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Diligent software engineer with 5+ years of experience in commercial
            application and software development. Eager to join Cyclone Inc. to
            build innovative and cutting-edge business solutions for the
            impressive suite of clients within its global reach. In previous
            roles, slashed downtime by 25% and ensured 98% on-time project
            completion. Also identified and dealt with a significant process
            bottleneck that boosted coding efficiency by 35% when resolved.
          </div>
          <br />
          <div style={{ fontSize: "17px", fontWeight: 400 }}>
            Name - Nipul Yansith <br />
            Age - 21 <br />
            Address - Colombo, Sri Lanka <br />
            University - University of Colombo <br />
            Email - nipulyansith26@gmail.com
          </div>
        </div>
        <div className="column">
          <figure className="image">
            <img
              className="is-rounded"
              src="1224.jpg"
              style={{ scale: "0.7", marginTop: "-1.7cm" }}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
