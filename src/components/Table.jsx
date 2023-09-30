import React, { useEffect, useState } from "react";
import axios from "axios";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import { url } from "../assets/api";

export default function Table() {
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    if (localStorage.getItem("didCall") !== true) {
      setData(JSON.parse(localStorage.getItem("data")));
    } else {
      await axios.get(url).then((response) => {
        setData(response.data.data);
        localStorage.setItem("data", JSON.stringify(response.data.data));
        localStorage.setItem("didCall", true);
      });
    }
  };

  const toggleEditModal = () => {
    setEditModal(!editModal);
  };

  const toggleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };

  const editUser = (id) => {
    setSelectedIndex(id);
    toggleEditModal();
  };

  const deleteUser = (id) => {
    console.log(id);
    setSelectedIndex(id);
    toggleDeleteModal();
  };

  return (
    <>
      <div className="flex justify-center min-h-screen ">
        <div className="col-span-12">
          <div className="overflow-auto lg:overflow-visible ">
            <table className="table text-indigo-500 border-separate space-y-6 text-sm">
              <thead className="bg-indigo-200 text-indigo-500">
                <tr>
                  <th className="p-3">Id</th>
                  <th className="p-3 text-left">Image & Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((user, index) => (
                    <tr className="bg-white" key={index}>
                      <td className="p-3">{index}</td>
                      <td className="p-3">
                        {" "}
                        <div className="flex align-items-center">
                          <img
                            className="rounded-full h-12 w-12  object-cover"
                            src={user.avatar}
                            alt={user.first_name}
                          />
                          <div className="ml-3 pt-3">
                            <div className="">
                              {user.first_name + " " + user.last_name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">{user.email}</td>
                      <td className="p-3 ">
                        <button
                          className="px-5 hover:text-green-500 duration-150 ease-in-out"
                          onClick={() => editUser(index)}
                        >
                          <i className="fa-solid fa-pen"></i>
                        </button>
                        <button
                          className="px-5 hover:text-red-500 duration-150 ease-in-out"
                          onClick={() => deleteUser(index)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {editModal === true && (
        <div className="fixed top-0 bg-white left-0 z-50 flex items-center justify-center w-full h-full bg-opacity-40">
          <EditModal
            toggleModal={toggleEditModal}
            index={selectedIndex}
            setIndex={setSelectedIndex}
            getData={getData}
          />
        </div>
      )}
      {deleteModal === true && (
        <div className="fixed top-0 bg-white left-0 z-50 flex items-center justify-center w-full h-full bg-opacity-40">
          <DeleteModal
            toggleModal={toggleDeleteModal}
            index={selectedIndex}
            setIndex={setSelectedIndex}
            getData={getData}
          />
        </div>
      )}
    </>
  );
}
