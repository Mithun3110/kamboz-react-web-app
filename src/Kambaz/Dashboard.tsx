import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
          <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
            <Card.Body>
            <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</Card.Title>
            <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
              Full Stack software developer</Card.Text>
            <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>


          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/2345/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/java.jpg" width="100%" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2345 Java Programming</Card.Title>
                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  Object-Oriented Design
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/3456/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/python.jpg" width="100%" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3456 Python for Data Science</Card.Title>
                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  Intro to Python and Pandas
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/4567/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/htmlcss.jpg" width="100%" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4567 HTML & CSS</Card.Title>
                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  Web Design Fundamentals
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/5678/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/node.jpg" width="100%" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5678 Node.js Backend</Card.Title>
                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  Server-side JavaScript
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/6789/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/database.jpg" width="100%" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS6789 Databases</Card.Title>
                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  SQL & NoSQL Concepts
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/7890/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/ml.jpg" width="100%" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS7890 Machine Learning</Card.Title>
                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  ML with Scikit-Learn
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/8901/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/linux.jpg" width="100%" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS8901 Linux & Bash</Card.Title>
                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  Shell scripting basics
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/9012/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/devops.jpg" width="100%" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS9012 DevOps</Card.Title>
                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  CI/CD and Docker
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/1011/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/git.jpg" width="100%" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1011 Git & GitHub</Card.Title>
                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  Version Control Basics
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>
      </Row>
      </div>
    </div>
);}
