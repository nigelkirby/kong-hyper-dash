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
  async getService(id) {
    return (await axios.get(`${this.baseUrl}/services/${id}`)).data
  },
  async getServiceRoutes(id) {
    return (await axios.get(`${this.baseUrl}/services/${id}/routes`)).data
  },
  async getServicePlugins(id) {
    return (await axios.get(`${this.baseUrl}/services/${id}/plugins`)).data
  },
}

export default KongService
