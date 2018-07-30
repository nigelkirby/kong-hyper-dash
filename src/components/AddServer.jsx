import { h } from 'hyperapp'

export default ({ set, connect }) => {
  const keyup = e => (e.keyCode === 13 ? connect() : set({ url: e.target.value }))
  return (
    <div>
      <input type="text" onkeyup={keyup} placeholder="http://localhost:8001" />
      <button onclick={connect}>Load</button>
    </div>
  )
}
