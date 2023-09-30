import React from "react";

export default function DeleteModal({ toggleModal, index, setIndex, getData }) {
  const deleteUser = () => {
    console.log(index - 1);
    const data = JSON.parse(localStorage.getItem("data"));
    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
    setIndex(null);
    getData();
    toggleModal();
  };
  return (
    <>
      <section className="py-1 bg-white">
        <div className="w-full px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-black text-6xl font-bold">
                  Confirm Delete
                </h6>
              </div>
              <div className="flex">
                <button
                  className="bg-red-500 w-full mt-10 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-3 rounded outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 hover:bg-red-700"
                  type="button"
                  onClick={deleteUser}
                >
                  Yes
                </button>
                <button
                  className="bg-indigo-500 w-full mt-10 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-3 rounded outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 hover:bg-indigo-700"
                  type="button"
                  onClick={toggleModal}
                >
                  No
                </button>
              </div>
              <hr className="mt-10 text-indigo-500" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
