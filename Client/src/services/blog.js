import axios from 'axios'
const baseURL = '/api/blog'

const getAll = async () => {
    const response = await axios.get(baseURL)
    return response.data
}

const getSingle = async (ID) => {
    const response = await axios.get(`${baseURL}/${ID}`)
    return response.data
}

export default { getAll, getSingle }