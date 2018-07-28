import axios from 'axios'

function KongService(url) {
  this.baseUrl = url
}

KongService.prototype = {
  async info() {
    return (await axios.get(this.baseUrl)).data
  },
}

export default KongService
