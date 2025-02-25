import axios from "axios";

const API_URL = "http://localhost:3000/users";

export const adduser = async (data) => {
  try {
    await axios.post(API_URL, data);
  } catch (error) {
    console.log("error.message", error.message);
  }
};
