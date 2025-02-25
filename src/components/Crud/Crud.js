import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router";
import { AddUsers } from "./AddUsers";
import { AllUsers } from "./AllUsers";
import "../../styles.css";
export const Crud = () => {
  return (
    <>
      <h1>Crud(Todo)</h1>
      <div className="Nav-Bar">
        <nav>
          <ul>
            <li>
              <NavLink to="/crud/allusers">All users</NavLink>
            </li>
            <li>
              <NavLink to="/crud/addusers">Add users</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  );
};
