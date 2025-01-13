import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Good Day, I am <span className="purple">Asiphile Mthethwa </span>
            from <span className="purple"> Johannesbug, South Africa.</span>
            <br />
            I am currently a mobile software developer intern at mLab.
            <br />
            and currently completing my Bachelor of laws Degree at the
            University of South Africa.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sewing
            </li>
            <li className="about-activity">
              <ImPointRight /> Fact finding or Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking a 'chefs kiss' meal
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Aspire to inspire before, you expire!"{" "}
          </p>
          <footer className="blockquote-footer">
            Asiphile.M well I'd have said it if I was wise.
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
