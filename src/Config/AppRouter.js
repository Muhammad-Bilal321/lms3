import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "../Authentication/SignupPage";
import LoginPage from "../Authentication/LoginPage";
import Protected from "../Authentication/Protected";
import LMS_Panel from "../Admin Screen/LMS_Panel";
import AppDrawer from "../Components/AppDrawer";
import InstituteList from "../Admin Screen/InstituteList";
import InstituteForm from "../Admin Screen/InstituteForm";
import UserRegister from "../Admin Screen/UserRegister";
import CourseList from "../Institute Screen/Courses/CourseList";
import CourseForm from "../Institute Screen/Courses/CourseForm";
import RegistrationControl from "../Institute Screen/Form & Lists/RegistrationControl";
import Result from "../Institute Screen/Form & Lists/Results";
import StudentsList from "../Institute Screen/Form & Lists/StudentsList";
import InstituteDetails from "../Admin Screen/InstituteDetails";

export default function AppRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/*"
            element={
              <>
                <Protected Screen={AppDrawer} />
                <Routes>
                  <Route path="/" element={<Protected Screen={LMS_Panel} />} />
                  <Route
                    path="institute-list"
                    element={<Protected Screen={InstituteList} />}
                  />
                  <Route
                    path="institute-form"
                    element={<Protected Screen={InstituteForm} />}
                  />
                  <Route
                    path="/institute-details/:id"
                    element={<Protected Screen={InstituteDetails} />}
                  />
                  <Route
                    path="user-registration"
                    element={<Protected Screen={UserRegister} />}
                  />
                  <Route
                    path="course-list"
                    element={<Protected Screen={CourseList} />}
                  />
                  <Route
                    path="course-form"
                    element={<Protected Screen={CourseForm} />}
                  />
                  <Route
                    path="registration-control"
                    element={<Protected Screen={RegistrationControl} />}
                  />
                  <Route
                    path="result"
                    element={<Protected Screen={Result} />}
                  />
                  <Route
                    path="student-list"
                    element={<Protected Screen={StudentsList} />}
                  />
                </Routes>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
