import ky from "ky-universal";
const BASE_URL = new URL("https://full-stack-challenge-api.vercel.app/api/");
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
