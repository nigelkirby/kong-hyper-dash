import Kong from '../services/KongService'

let kong

export default {
  set: obj => () => obj,
  setUrl: url => () => ({ url }),
  initKong: () => (state, actions) => {
    kong = new Kong(state.url)
    actions.loadInfo()
  },
  loadInfo: () => async (state, actions) => {
    try {
      const { version } = await kong.info()
      actions.set({ version, loadedUrl: state.url })
    } catch (err) {
      actions.set({ loadedUrl: false })
    }
  },
}
