import React from "react";
import ReactModal from "react-modal";
import { company } from "../api";
import Router from "next/router";

ReactModal.setAppElement("#root");

const customStyles = {
  content: {
    top: "33%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const DeleteModal = ({ id, name }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const deleteCompany = async () => {
    try {
      const res = await company.deleteCompany(id);
      await Router.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <button
        className="mt-4 ml-3 font-bold text-gray-600 text-sm"
        onClick={openModal}
      >
        <div className="flex items-center">
          <svg
            className="h-3 w-3 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
          </svg>
          Delete
        </div>
      </button>
      <ReactModal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Delete Modal"
      >
        <div>
          <div className="flex flex-row-reverse">
            <button
              onClick={closeModal}
              className="rounded-md p-1 hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="relative max-w-xs bg-white rounded-lg py-2 px-24 flex flex-col items-center justify-center text-red-500">
            <svg
              className="h-16 w-16 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
            </svg>
            <span className="font-semibold">Are you sure?</span>
            <p className="text-gray-600 text-sm mt-2">{name}</p>
            <button
              onClick={deleteCompany}
              className="bg-red-500 py-1 px-4 border-b-4 border-red-800 rounded text-white hover:border-red-lighter hover:bg-red-400 my-10"
            >
              <span className="flex items-center">Delete</span>
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default DeleteModal;
