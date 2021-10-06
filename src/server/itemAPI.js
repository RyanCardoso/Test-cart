import axios from 'axios'

const getItemAPI = axios.create({
    baseURL: 'http://localhost:3000/items'
})

export default getItemAPI