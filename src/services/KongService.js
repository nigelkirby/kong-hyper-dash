import axios from 'axios'

function KongService(url) {
  this.baseUrl = url
}

KongService.prototype = {
  async info() {
    return (await axios.get(this.baseUrl)).data
  },
  async getServices() {
    return (await axios.get(`${this.baseUrl}/services`)).data
  },
}

export default KongService
