import React from 'react'
import axios from 'axios'

export const getItemAPI = axios.create({
    baseURL: 'https://localhost:3000'
})