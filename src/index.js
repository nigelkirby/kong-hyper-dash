import { app } from 'hyperapp'
import actions from './actions'
import state from './state'
import view from './App.jsx'

const main = app(state, actions, view, document.body)

const servers = JSON.parse(localStorage.getItem('servers')) || {}
main.set({
  servers,
})

export default main
