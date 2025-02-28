import React from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router";
import Apifetch from "./Apifetch";
import Debouncing from "./Debouncing";

import ImageUpload from "./ImageUpload";
import Listcomponent from "./Listcomponent";
import Pagination from "./Pagination";
import Recursion from "./Recursion";
import data from "../data.json";
import Search from "./Search";
import Todolist from "./Todolist";
import { Crud } from "./Crud/Crud";
import { AllUsers } from "./Crud/AllUsers";
import { AddUsers } from "./Crud/AddUsers";

function Router() {
  const items = [
    "item1",
    "item2",
    "Another Item1",
    "sneha",
    "Volvo",
    "BMW",
    "Ford",
    "Mazda",
  ];
  return (
    <>
      <BrowserRouter>
        <div className="box">
          <nav>
            <ul>
              <li>
                <NavLink to="/api">Apifetch</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="search">Search</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/search/list">list</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/pagination">Pagination</NavLink>
              </li>
              <li>
                <NavLink to="/uploadimage">Image Upload</NavLink>
              </li>
              <li>
                <NavLink to="/todolist">TodoList</NavLink>
              </li>
              <li>
                <NavLink to="/debouncing">Debouncing</NavLink>
              </li>
              <li>
                <NavLink to="/recursion">Treeview</NavLink>
              </li>
              <li>
                <NavLink to="/crud">Crud</NavLink>
              </li>
            </ul>
          </nav>
          <div>
            <Routes>
              <Route
                path="pagination"
                element={<Pagination items={items} itemsPerPage={4} />}
              ></Route>

              <Route path="search" element={<Search />}>
                <Route path="list" element={<Listcomponent />} />
              </Route>

              <Route path="api" element={<Apifetch />}></Route>
              <Route path="uploadimage" element={<ImageUpload />}></Route>
              <Route path="todolist" element={<Todolist />}></Route>
              <Route path="debouncing" element={<Debouncing />}></Route>
              <Route
                path="recursion"
                element={<Recursion data={data} />}
              ></Route>
              <Route path="crud" element={<Crud />}>
                <Route path="allusers" element={<AllUsers />} />
                <Route path="addusers" element={<AddUsers />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Router;
