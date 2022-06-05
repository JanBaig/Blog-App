import React from 'react'
import axios from 'axios'
const baseURL = '/api'

const userLogin = async (credentials) => {
    const response = await axios.post(`${baseURL}/login`, credentials)
    return response.data
}

const getUser = async (ID) => {
    const response = await axios.get(`${baseURL}/user/${ID}`)
    return response.data
}

const newUser = async(userData) => {
    const response = await axios.post(`${baseURL}/user`, userData)
    return response.data
}

export default { userLogin, getUser, newUser }