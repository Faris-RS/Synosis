import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";

export default function AddUser() {
  const [id, setId] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      first_name: firstName,
      last_name: lastName,
      avatar: avatar,
    };
    const newData = [...JSON.parse(localStorage.getItem("data")), data];
    localStorage.setItem("data", JSON.stringify(newData));
  };

  return (
    <>
      <section className="py-1 bg-white">
        <div className="w-full px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-black text-6xl font-bold">
                  Add a new user
                </h6>
              </div>
              <hr className="mt-10 text-indigo-500" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={addUser}>
                <div className="flex flex-wrap">
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label className="block text-xs uppercase text-gray-600 font-bold mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="border-0 px-3 py-3 text-indigo-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-indigo-300 text-indigo-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="lastName"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-indigo-300 text-indigo-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                        Avatar
                      </label>
                      <FileBase
                        type="file"
                        multiple={false}
                        required
                        onDone={({ base64 }) => setAvatar(base64)}
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <button
                    className="bg-indigo-500 w-full mt-10 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-3 rounded outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
