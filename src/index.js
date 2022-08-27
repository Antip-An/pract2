import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Page from "./Page";
import CourseForm from "./pages/CourseForm";
import ListenerForm from "./pages/ListenerForm";
import UserForm from "./pages/UserForm";
import CathedraForm from "./pages/CathedraForm";
import UtpRpForm from "./pages/UtpRpForm";
import FormForm from "./pages/FormForm";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path="/users" element={<UserForm />} />
          <Route path="/courses" element={<CourseForm />} />
          <Route path="/cathedra" element={<CathedraForm />} />
          <Route path="/listeners" element={<ListenerForm />} />
          <Route path="/utprp" element={<UtpRpForm />} />
          <Route path="/forms" element={<FormForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
