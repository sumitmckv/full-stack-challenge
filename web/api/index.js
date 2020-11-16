import { get, post, put, rm } from "./base";

export const company = {
  getCompanies: () => get("company").json(),
  getCompany: (id) => get(`company/${id}`).json(),
  addCompany: (data) => post("company", { json: { data } }).json(),
  updateCompany: (id, data) => put(`company/${id}`, { json: { data } }).json(),
  deleteCompany: (id) => rm(`company/${id}`).json(),
  addFounder: (id, data) =>
    post(`company/${id}/founder`, { json: { data } }).json(),
};
