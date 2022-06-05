import axios from 'axios'
const baseURL = '/api/blog'

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
    const response = await axios.get(baseURL)
    return response.data
}

const getSingle = async (ID) => {
    const response = await axios.get(`${baseURL}/${ID}`)
    return response.data
}

const createNew = async (newBlog) => {
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.post(`${baseURL}`, newBlog, config)
    return response.data

}

const deleteSingle = async(ID) => {

    const response = await axios.delete(`${baseURL}/${ID}`)
    return response.data

}

const updateSingle = async (ID, updatedBlog) => {

    const response = await axios.put(`${baseURL}/${ID}`, updatedBlog)
    return response.data

}

export default { getAll, getSingle, setToken, createNew, deleteSingle, updateSingle }