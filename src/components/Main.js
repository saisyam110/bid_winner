import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "../pages/Categories";
import Sidebar from "./Sidebar";
import "./Main.css";
import SubCategories from "../pages/SubCategories";
import Assemble from "../pages/Assemble";
import MainBody from "./MainBody";
const Main = () => {
  return (
    <>
      <div className="main_box">
        <div className="row">
          <div className="col-xl-1 col-lg-2 col-md-3 col-sm-4 sidebar">
            <Sidebar />
          </div>
          <div className="col-xl-3 col-lg-10 col-md-9 col-sm-8 maincate">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Categories />} />
                <Route path="/sub-categories" element={<SubCategories />} />
                <Route path="/assemble" element={<Assemble />} />
              </Routes>
            </BrowserRouter>
          </div>
          <div className="col-12 col-xl-8">
            <MainBody />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
