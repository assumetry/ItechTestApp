import * as axios from 'axios'

export const pageAPI = {
    getData() {
        return axios.get('http://api.icndb.com/jokes/random/5')
    }
}