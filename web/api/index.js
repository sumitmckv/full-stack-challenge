import { get } from "./base";

export const company = {
  getCompanies: () => get("company").json(),
  getCompany: (id) => get(`company/${id}`).json(),
};
