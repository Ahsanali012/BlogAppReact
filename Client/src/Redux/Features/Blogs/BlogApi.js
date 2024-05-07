import publicAxios from "../../../components/PublicAxios";

export const getblogs = async () => {
  const response = await publicAxios.get("/blogs");
  return response.data;
};
