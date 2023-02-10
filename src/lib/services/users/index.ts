import axios from 'axios';

export async function getUsersAPI(params: any) {
  const response = await axios.get(
    `http://localhost:4000/users?q=${params.q}&page=${params.page}&size=${params.size}`
  );

  return response.data;
}
