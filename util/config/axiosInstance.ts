import axios from "axios"


export const axiosPublic = axios.create({
    // dumy testing data

    baseURL: `${SERVER_LOCALHOST}/api/v1`,
    headers: {
        'Content-Type': 'application/json',
    }
}

)

export const axiosPrivate = axios.create({
    // dummy testing  data
    
    baseURL: `${SERVER_LOCALHOST}/api/v1`,
    headers: {
        'Content-Type': 'application/json',
    }
}

) 