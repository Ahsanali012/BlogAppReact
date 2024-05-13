import publicAxios from "../../../components/PublicAxios";



 export const Getblogs = async () => {
  const response = await publicAxios.get('/blogs');

  return response.data;
}


