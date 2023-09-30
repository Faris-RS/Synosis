import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [page, setPage] = useState(false);
  useEffect(() => {
    setPage(window.location.pathname);
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-indigo-500 p-4 mb-10">
        <div className="container mx-auto flex justify-between items-center">
          <a className="text-white text-2xl font-semibold">Reqres</a>
          <ul className="flex space-x-4 text-white">
            <li>
              <a
                onClick={() => navigate("/view")}
                className={`${page === "/view" ? "underline" : ""}`}
              >
                All Users
              </a>
            </li>
            <div>
              <li>
                <a
                  onClick={() => navigate("/create")}
                  className={`${page === "/create" ? "underline" : ""}`}
                >
                  Add User
                </a>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}
