import axios from "axios";

// Auth
export async function auth(userId) {
  try {
    const response = await axios.post("http://localhost:3000/auth", { userId });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Farming
export async function farming(token, iot) {
  try {
    const headers = { headers: { token: `Bearer ${token}` } };
    const response = await axios.post(
      "https://localhost:3000/farm",
      { iot },
      headers
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Set mail
export async function setMail(token, email) {
  try {
    const headers = { headers: { token: `Bearer ${token}` } };
    const response = await axios.patch(
      "https://localhost:3000/users/",
      { email },
      headers
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Share link
export async function shareLink(token) {
  try {
    const headers = { headers: { token: `Bearer ${token}` } };
    const response = await axios.post(
      "https://localhost:3000/referal/",
      {},
      headers
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Tasks
export async function task(token, taskId) {
  try {
    const headers = { headers: { token: `Bearer ${token}` } };
    const response = await axios.post(
      "https://localhost:3000/tasks/",
      { taskId },
      headers
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
