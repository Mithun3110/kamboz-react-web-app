import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import PeopleTable from "./Courses/People/Table";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/protectedRoute";
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";
import Session from "./Account/Session";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";

export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [enrolling, setEnrolling] = useState<boolean>(false);

  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  const findCoursesForUser = async () => {
    try {
      const userCoursesRaw = await userClient.findCoursesForUser(currentUser._id);
      const userCourses = userCoursesRaw.filter((c: any) => c && c._id);
      setCourses(userCourses);
    } catch (error) {
      console.error("Error fetching user's courses:", error);
    }
  };

  const fetchCourses = async () => {
    try {
      const allCoursesRaw = await courseClient.fetchAllCourses();
      const enrolledCoursesRaw = await userClient.findCoursesForUser(currentUser._id);

      const allCourses = allCoursesRaw.filter((c: any) => c && c._id);
      const enrolledCourses = enrolledCoursesRaw.filter((c: any) => c && c._id);

      const updatedCourses = allCourses.map((course: any) => {
        const isEnrolled = enrolledCourses.some((c: any) => c._id === course._id);
        return { ...course, enrolled: isEnrolled };
      });

      setCourses(updatedCourses);
    } catch (error) {
      console.error("Error fetching all courses:", error);
    }
  };

  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    try {
      if (enrolled) {
        await userClient.enrollIntoCourse(currentUser._id, courseId);
      } else {
        await userClient.unenrollFromCourse(currentUser._id, courseId);
      }

      setCourses(
        courses.map((course) =>
          course._id === courseId ? { ...course, enrolled } : course
        )
      );
    } catch (error) {
      console.error("Error updating enrollment:", error);
    }
  };

  const addCourse = async () => {
    try {
      const newCourse = await courseClient.createCourse(course);
      if (newCourse && newCourse._id) {
        setCourses([...courses, newCourse]);
      } else {
        console.warn("Invalid course returned from server:", newCourse);
      }
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  const deleteCourse = async (courseId: string) => {
    try {
      await courseClient.deleteCourse(courseId);
      setCourses(courses.filter((course) => course._id !== courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const updateCourse = async () => {
    try {
      await courseClient.updateCourse(course);
      setCourses(
        courses.map((c) => (c._id === course._id ? course : c))
      );
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  useEffect(() => {
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    }
  }, [currentUser, enrolling]);

  return (
    <Session>
      <div id="wd-kambaz">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addCourse={addCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                    enrolling={enrolling}
                    setEnrolling={setEnrolling}
                    updateEnrollment={updateEnrollment}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <Courses courses={courses} />
                </ProtectedRoute>
              }
            />
            <Route path="/People" element={<PeopleTable />} />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
