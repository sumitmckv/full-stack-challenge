import React from "react";
import { useForm, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";

const CompanyForm = ({ title, company, onSave }) => {
  const { control, register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => onSave(data);
  return (
    <div className="max-w-4xl mt-3 p-6 mx-auto bg-white rounded-md shadow-md">
      <h2 className="text-lg text-gray-700 font-semibold capitalize">
        {title}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4 w-full">
          <label className="text-gray-700" htmlFor="companyName">
            Company Name
          </label>
          <input
            className="w-full mt-2 py-2 px-4 bg-white text-gray-700 border border-gray-300 rounded block placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:shadow-outline"
            aria-label="Company Name"
            name="name"
            defaultValue={company.name}
            ref={register({ required: true, maxLength: 20 })}
          />
          {errors.name && errors.name.type === "required" && (
            <span className="text-red-600">Company name is required</span>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <span className="text-red-600">
              Company name can not be more than 20
            </span>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          <div>
            <label className="text-gray-700" htmlFor="companyName">
              City
            </label>
            <input
              name="city"
              defaultValue={company.city}
              ref={register({ required: true, maxLength: 20 })}
              className="w-full mt-2 px-4 py-2 block rounded bg-white text-gray-800 border border-gray-300 focus:border-blue-500 focus:outline-none focus:shadow-outline"
            />
            {errors.city && errors.city.type === "required" && (
              <span className="text-red-600">City name is required</span>
            )}
            {errors.city && errors.city.type === "maxLength" && (
              <span className="text-red-600">
                City name can not be more than 20
              </span>
            )}
          </div>

          <div>
            <label className="text-gray-700" htmlFor="passwordConfirmation">
              State
            </label>
            <input
              name="state"
              defaultValue={company.state}
              ref={register({ required: true, maxLength: 20 })}
              className="w-full mt-2 px-4 py-2 block rounded bg-white text-gray-800 border border-gray-300 focus:border-blue-500 focus:outline-none focus:shadow-outline"
            />
            {errors.state && errors.state.type === "required" && (
              <span className="text-red-600">State name is required</span>
            )}
            {errors.state && errors.state.type === "maxLength" && (
              <span className="text-red-600">
                State name can not be more than 20
              </span>
            )}
          </div>

          <div>
            <label className="text-gray-700" htmlFor="passwordConfirmation">
              Founded
            </label>
            <Controller
              control={control}
              rules={{ required: false }}
              name="founded"
              defaultValue={company.founded ? new Date(company.founded) : null}
              render={({ onChange, onBlur, value }) => (
                <ReactDatePicker
                  className="w-full mt-2 px-4 py-2 block rounded bg-white text-gray-800 border border-gray-300"
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                  isClearable
                  dateFormat="dd/MM/yyyy"
                  autoComplete="Off"
                />
              )}
            />
          </div>
        </div>

        <div className="mt-4 w-full">
          <label className="text-gray-700" htmlFor="companyName">
            Company Description
          </label>
          <textarea
            className="w-full mt-2 py-2 px-4 bg-white text-gray-700 border border-gray-300 rounded block placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:shadow-outline"
            aria-label="Company Description"
            name="description"
            defaultValue={company.description}
            ref={register({ required: true, maxLength: 5000 })}
          />
          {errors.description && errors.description.type === "required" && (
            <span className="text-red-600">
              Company description is required
            </span>
          )}
          {errors.description && errors.description.type === "maxLength" && (
            <span className="text-red-600">
              Company description can not be more than 5000
            </span>
          )}
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-gray-800 text-gray-200 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyForm;
