import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="TO-DO List App"
              description="This To-Do List Application is a full-featured web application designed for managing daily tasks with CRUD (Create, Read, Update, Delete) functionality. It allows users to register, log in, and manage a personalized to-do list with a user-friendly interface. The application is developed using HTML, CSS, JavaScript, SQLite, and Material UI for enhancing visual appeal. It is fully responsive and implements user authentication and data validation for secure usage."
              ghLink="	https://github.com/Asiphile1/To-do-list-app-codetribe"
              demoLink="https://to-do-list-app-codetribe.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Employee Registration App"
              description="The Employee Management App is a simple and user-friendly React application designed to manage employee information. It allows users to add new employees, update existing employee details, and view employee information. The app uses local storage to persist data, ensuring that employee information is retained even after the page is refreshed."
              ghLink="https://github.com/Asiphile1/codeTribe-employee-app"
              demoLink="https://code-tribe-employee-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Weather App"
              description="A React-based Weather Application that provides current weather conditions and hourly forecasts for any city. The app uses the OpenWeather API to fetch weather data and displays it with a user-friendly interface."
              ghLink="https://github.com/Asiphile1/Weather-App-CodeTribe"
              demoLink="https://weather-app-code-tribe.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Birthday Card"
              description="This is a React Native app that allows users to create custom birthday cards by adding images, text, and adjusting font sizes. The app includes features such as selecting an image from the gallery, editing text, and formatting the card for a personalized birthday greeting."
              ghLink="https://github.com/Asiphile1/Birthday-Card"
              demoLink="https://birthday-card-eta-virid.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Recipe App"
              description="The Online Recipe Application is a web-based platform that allows users to manage their favorite recipes. Built using ReactJS and JSON Server, this application provides users with the ability to store, search, add, delete, and update recipes. Users can register, log in, and securely manage their recipe collections. The app implements CRUD operations and ensures user-friendly navigation with responsive design."
              ghLink="https://github.com/Asiphile1/Recipe-App-CodeTribe"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Text effect animation"
              description="This project is a simple yet visually appealing text effect animation designed to enhance the user experience with creative and dynamic text transitions. The animation is customizable, lightweight, and easy to integrate into any web project."
              ghLink="https://github.com/Asiphile1/text-effect"
              demoLink="https://text-effect-od8u.vercel.app/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
