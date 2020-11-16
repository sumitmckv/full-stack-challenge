import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { company } from "../../../api";
import Router from "next/router";

const AddFounder = ({ id }) => {
  const { register, handleSubmit, errors } = useForm();
  const [emailUnique, setEmailUnique] = useState(true);
  const onSubmit = async (data) => {
    try {
      const res = await company.addFounder(id, data);
      await Router.push(`/company/${id}`);
    } catch (e) {
      setEmailUnique(false);
      console.error(e);
    }
  };

  const updateUniqueEmail = () => setEmailUnique(true);

  return (
    <div className="max-w-4xl mt-3 p-6 mx-auto bg-white rounded-md shadow-md">
      <h2 className="text-lg text-gray-700 font-semibold capitalize">
        Add founder
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4 w-full">
          <label className="text-gray-700" htmlFor="companyName">
            Name
          </label>
          <input
            className="w-full mt-2 py-2 px-4 bg-white text-gray-700 border border-gray-300 rounded block placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:shadow-outline"
            aria-label="Company Name"
            name="name"
            ref={register({ required: true, maxLength: 20 })}
          />
          {errors.name && errors.name.type === "required" && (
            <span className="text-red-600">Founder name is required</span>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <span className="text-red-600">
              Founder name can not be more than 20
            </span>
          )}
        </div>

        <div className="mt-4 w-full">
          <label className="text-gray-700" htmlFor="companyName">
            Title
          </label>
          <input
            className="w-full mt-2 py-2 px-4 bg-white text-gray-700 border border-gray-300 rounded block placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:shadow-outline"
            aria-label="Title"
            name="title"
            ref={register({ required: true, maxLength: 20 })}
          />
          {errors.title && errors.title.type === "required" && (
            <span className="text-red-600">Founder title is required</span>
          )}
          {errors.title && errors.title.title === "maxLength" && (
            <span className="text-red-600">
              Founder title can not be more than 20
            </span>
          )}
        </div>

        <div className="mt-4 w-full">
          <label className="text-gray-700" htmlFor="companyName">
            E-mail
          </label>
          <input
            className="w-full mt-2 py-2 px-4 bg-white text-gray-700 border border-gray-300 rounded block placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:shadow-outline"
            aria-label="E-mail"
            id="email"
            name="email"
            onChange={updateUniqueEmail}
            ref={register({
              required: "Founder e-mail is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-600">{errors.email.message}</span>
          )}
          {!emailUnique && (
            <span className="text-red-600">E-mail is not unique</span>
          )}
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-gray-800 text-gray-200 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export function getServerSideProps({ params }) {
  const id = params.id;
  return {
    props: {
      id,
    },
  };
}

export default AddFounder;
