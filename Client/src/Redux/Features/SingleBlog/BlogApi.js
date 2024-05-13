import publicAxios from "../../../components/PublicAxios";

const getBlog = async (id) => {
    const response = await publicAxios.get(`/blogs/${id}`);

    return response.data;
}

export default getBlog