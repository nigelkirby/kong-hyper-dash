import { app } from 'hyperapp'
import actions from './actions'
import state from './state'
import view from './App.jsx'

const main = app(state, actions, view, document.body)

const url = localStorage.getItem('kongUrl')
if (url) main.setUrl(url)
main.initKong()

export default main
