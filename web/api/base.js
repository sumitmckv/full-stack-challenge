import ky from "ky-universal";
const BASE_URL = new URL("http://localhost:8181/api/");
const apiClient = ky.create({
  prefixUrl: BASE_URL,
  headers: {},
  hooks: {
    beforeRequest: [
      () => {
        //TODO show loader
      },
    ],
    afterResponse: [
      () => {
        //TODO hide loader
      },
    ],
  },
});
export const { get, post, put, delete: rm } = apiClient;
