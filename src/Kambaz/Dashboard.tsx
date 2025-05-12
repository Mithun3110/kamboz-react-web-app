import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2345/Home" className="wd-dashboard-course-link">
            <img src="/images/java.jpg" width={200} />
            <div>
              <h5> CS2345 Java Programming </h5>
              <p className="wd-dashboard-course-title"> Object-Oriented Design </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3456/Home" className="wd-dashboard-course-link">
            <img src="/images/python.jpg" width={200} />
            <div>
              <h5> CS3456 Python for Data Science </h5>
              <p className="wd-dashboard-course-title"> Intro to Python and Pandas </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/4567/Home" className="wd-dashboard-course-link">
            <img src="/images/htmlcss.jpg" width={200} />
            <div>
              <h5> CS4567 HTML & CSS </h5>
              <p className="wd-dashboard-course-title"> Web Design Fundamentals </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5678/Home" className="wd-dashboard-course-link">
            <img src="/images/node.jpg" width={200} />
            <div>
              <h5> CS5678 Node.js Backend </h5>
              <p className="wd-dashboard-course-title"> Server-side JavaScript </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/6789/Home" className="wd-dashboard-course-link">
            <img src="/images/database.jpg" width={200} />
            <div>
              <h5> CS6789 Databases </h5>
              <p className="wd-dashboard-course-title"> SQL & NoSQL Concepts </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/7890/Home" className="wd-dashboard-course-link">
            <img src="/images/ml.jpg" width={200} />
            <div>
              <h5> CS7890 Machine Learning </h5>
              <p className="wd-dashboard-course-title"> ML with Scikit-Learn </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/8901/Home" className="wd-dashboard-course-link">
            <img src="/images/linux.jpg" width={200} />
            <div>
              <h5> CS8901 Linux & Bash </h5>
              <p className="wd-dashboard-course-title"> Shell scripting basics </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/9012/Home" className="wd-dashboard-course-link">
            <img src="/images/devops.jpg" width={200} />
            <div>
              <h5> CS9012 DevOps </h5>
              <p className="wd-dashboard-course-title"> CI/CD and Docker </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1011/Home" className="wd-dashboard-course-link">
            <img src="/images/git.jpg" width={200} />
            <div>
              <h5> CS1011 Git & GitHub </h5>
              <p className="wd-dashboard-course-title"> Version Control Basics </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
