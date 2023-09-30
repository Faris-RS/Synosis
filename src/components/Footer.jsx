import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../assets/api";
export default function Footer() {
  const [count, setCount] = useState();

  useEffect(() => {
    if (localStorage.getItem("didCall") !== true) {
      setCount(JSON.parse(localStorage.getItem("data")).length);
    }
  }, []);

  const getData = async () => {
    window.location.reload();
    await axios.get("https://reqres.in/api/users").then((response) => {
      localStorage.setItem("data", JSON.stringify(response.data.data));
      localStorage.setItem("didCall", true);
    });
  };

  if (count === 0) {
    getData();
  }

  return (
    <footer className="bg-indigo-500 text-white py-6 text-center mt-10">
      <div className="container mx-auto">
        <p> There are a total of {count} users</p>
        {count === 0 && (
          <p className="underline" onClick={getData}>
            Load users
          </p>
        )}
      </div>
    </footer>
  );
}
