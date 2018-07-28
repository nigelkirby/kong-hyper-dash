import { h } from 'hyperapp'

export default ({
  setUrl, initKong, loadedUrl, version,
}) => {
  const keyup = e => setUrl(e.target.value)
  const enterInit = e => (e.keyCode === 13) && initKong()
  const title = loadedUrl && `Connected to ${loadedUrl} running v${version}`

  return <header>
    <span class="logo">Kong Dashboard</span>
    <input
      type="text"
      onkeyup={keyup}
      onkeydown={enterInit}
      placeholder="http://localhost:8001"
    />
    <button onclick={initKong}>Load</button>
    <span>{title}</span>
  </header>
}
