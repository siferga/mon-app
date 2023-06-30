import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards.js";
import ecommerce from "../../assets/Projects/vegetables1.jpg";
import application from "../../assets/Projects/application.jpg";
import blog from "../../assets/Projects/logoSF.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Projets
        </h1>
       
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="CompraTodo"
              description=" appli react.js, sharing as well as supports reactions on messages."
              ghLink="https://github.com"
              demoLink="https://google.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={application}
              isBlog={false}
              title="SupperApp"
              description=" bxqljhc cgzoipdyhcg vgouydg cd."
              ghLink="https://github.com"
              demoLink="https://google.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blogui"
              description="ghdlzihefg gqoidg g zopydfg poaieyh p aayheh ufjausud fyDhs  gaouyt sil silocça fernansd epzru yh "
              ghLink="https://github.com"
              demoLink="https://google.com/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

