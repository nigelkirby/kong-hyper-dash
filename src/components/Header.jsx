import { h } from 'hyperapp'

export default ({ setUrl, initKong }) => (
  <header>
    <span class="logo">Kong Dashboard</span>
    <input
      type="text"
      onkeyup={e => setUrl(e.target.value)}
      onkeydown={(e) => {
        if (e.keyCode === 13) initKong()
      }}
      defaultValue="http://localhost:8001"
    />
    <button onclick={initKong}>Load</button>
  </header>
)
