import Kong from '../services/KongService'

let kong

export default {
  set: obj => () => obj,
  setUrl: url => () => ({ url }),
  initKong: () => (state, actions) => {
    kong = new Kong(state.url)
    actions.loadInfo()
    actions.loadServices()
  },
  loadInfo: () => async (state, actions) => {
    try {
      const { version } = await kong.info()
      actions.set({ version, loadedUrl: state.url })
      localStorage.setItem('kongUrl', state.url)
    } catch (err) {
      actions.set({ loadedUrl: false })
    }
  },
  loadServices: () => async (state, actions) => {
    try {
      // TODO pagination
      const { data: services } = await kong.getServices()
      actions.set({ services })
    } catch (err) {
      actions.set({ services: false })
    }
  },
  showService: id => async (state, actions) => {
    try {
      const service = await kong.getService(id)
      const { data: routes } = await kong.getServiceRoutes(id)
      const { data: plugins } = await kong.getServicePlugins(id)
      actions.set({ spotlightService: Object.assign(service, { routes, plugins }) })
    } catch (err) {
      actions.set({ spotlightService: false })
    }
  },
}
