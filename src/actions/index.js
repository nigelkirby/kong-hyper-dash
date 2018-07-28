import Kong from '../services/KongService'

let kong

export default {
  connected: () => () => ({ connected: true }),
  setUrl: url => () => ({ url }),
  setInfo: info => () => ({ info }),
  initKong: () => ({ url }, actions) => {
    kong = new Kong(url)
    actions.loadInfo()
  },
  loadInfo: () => async (state, actions) => {
    try {
      const info = await kong.info()
      actions.setInfo(info)
    } catch (err) {
      actions.setInfo({})
    }
  },
}
