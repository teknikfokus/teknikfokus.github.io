import axios from 'axios'


const api = axios.create({
    baseURL: 'ENDPOINT',
    headers: {
        'Content-Type': 'application/vnd.api+json',
    },
})


function formatError(err) {
    return {
        error: err,
        statusCode: err.statusCode
    }
}

export const loadAllEvents = async function() {
    try {
        let response = await api.get('/events')
        return response.data
    } catch(err) {
        return formatError(err)
    }
}

export const registerToEvent =  async function() {
    try {
        let response = await api.post('/events', {data:""})
        return response.data
    } catch(err) {
        return formatError(err)
    }
}

export const withdrawFromEvent =  async function() {
    try {
        let response = await api.post('/events', {data:""})
        return response.data
    } catch(err) {
        return formatError(err)
    }
}
export default api